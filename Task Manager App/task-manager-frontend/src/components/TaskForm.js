import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveTask } from "../services/taskServices";

export  function TaskForm(){
    const [formData,setFormData] = useState({});
    const [taskCreated , isTaskCreated]= useState(false);
    const handleChange = (event)=>{
        setFormData({...formData,[event.target.name]:event.target.value});
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        await saveTask(formData);
       isTaskCreated({taskCreated:true});
    };
  return (
     <>
        <Container className="mt-5 text-center">
              <Alert>Create A New Task Here </Alert>
        </Container>
        <Container>
              <Row>
                 <Col lg='6'>
                    <Form onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" >
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" name="name" placeholder="Enter Task Name " onChange={handleChange}/>
                          </Form.Group>
                          <Form.Group className="mb-3" >
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="text" name="description" placeholder="Enter Task Description " onChange={handleChange} />
                          </Form.Group>
                          <Form.Group className="mb-3" >
                              <Form.Label>Deadline</Form.Label>
                              <Form.Control type="date" name="deadline" onChange={handleChange} />
                          </Form.Group>
                          <Button type="submit" variant="success"> Create Task </Button>
                    </Form>
                 </Col>
              </Row>
        </Container>
        <Container className="mt-3 text-center">
             {
                taskCreated ? <Alert variant="success"> Task Created Successfully </Alert> :null
             }
        </Container>
     </>
  );
}

