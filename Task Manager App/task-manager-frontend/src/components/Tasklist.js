import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { completeTask, getTasks, removeTask } from "../services/taskServices";

export function Tasklist(){
   const [tasks,setTasks] = useState([]);
   const handleTasks = async(url)=>{
      const responce = await getTasks(url);
      setTasks(responce.data);
   }
   useEffect(()=>{
       handleTasks("all");
   } , []);
    return (
      <>
        <Container className="mt-5 text-center">
             <Alert variant="primary"> List Of Tasks </Alert>
        </Container>
        <Container className="mt-4">
                <Dropdown onSelect={ async(key,event)=>{
                  const res =  await getTasks(event.target.innerHTML);
                  setTasks(res.data);
                }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Task
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>all</Dropdown.Item>
                        <Dropdown.Item>pending</Dropdown.Item>
                        <Dropdown.Item>completed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </Container>
        <Container className="mt-2">
              <Row>
                {
                    tasks.map((item)=>{
                        return (
                           <Col lg='4' className="mt-3">
                                <Card>
                                    <Card.Body>
                                        <Alert variant={item.isCompleted ?'success':'danger'}>
                                            {item.isCompleted ? 'Completed' : 'Pending'}
                                        </Alert>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        {
                                            !item.isCompleted ? <Button variant="primary" onClick={ async()=>{
                                                console.log("Button has clicked ");
                                                await completeTask(item._id);
                                                // await getTasks('all');
                                            }} className="btn-sm">Complete </Button> : null
                                        }
                                        <Button variant="danger" className="btn-sm ms-3" onClick={async()=>{
                                            await removeTask(item._id);
                                            // await getTasks('all');
                                        }}>Remove</Button>
                                    </Card.Body>
                                </Card>
                           </Col>
                        );
                    })
                }
              </Row>
        </Container>
      </>
    );
}