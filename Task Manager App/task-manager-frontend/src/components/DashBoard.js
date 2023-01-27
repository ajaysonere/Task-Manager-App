// import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { countCompletedTask, countDocument, countPendingTask } from "../services/taskServices";

export function DashBoard() {
    const [countAllTask, setCountAllTask] = useState();
    const [countAllCompleted , setCountAllCompleted] = useState();
    const [countAllPending, setCountAllPending] = useState();

    const handleCount = async()=>{
       const numberDocument =  await countDocument();
       console.log(numberDocument.data);
       setCountAllTask(numberDocument.data);
       const numberCompleted =  await countCompletedTask();
        setCountAllCompleted(numberCompleted.data);
       const numberPending =  await countPendingTask();
       setCountAllPending(numberPending.data);
    }

    useEffect(()=> {
        handleCount();
    },[])
  return (
    <>
       <Container className="mt-5 text-center">
         <Alert> WelCome To Task Manager App </Alert>
       </Container>
       <Container>
         <Row>
            <Col lg="4">
                      <Card>
                          <Card.Body>
                              <Card.Title>Total Tasks </Card.Title>
                              <Card.Text>
                                  <Alert variant="primary"> {countAllTask} </Alert>
                              </Card.Text>
                              <Button variant="primary">View All Tasks </Button>
                          </Card.Body>
                      </Card>
            </Col>
            <Col lg="4">
                      <Card>
                          <Card.Body>
                              <Card.Title> Completed Task </Card.Title>
                              <Card.Text>
                                  <Alert variant="success"> {countAllCompleted} </Alert>
                              </Card.Text>
                              <Button variant="success">View Completed Tasks </Button>
                          </Card.Body>
                      </Card>
            </Col>
            <Col lg="4">
                      <Card>
                          <Card.Body>
                              <Card.Title>Panding Task</Card.Title>
                              <Card.Text>
                                  <Alert variant="danger">  {countAllPending} </Alert>
                              </Card.Text>
                              <Button variant="danger">View Panding Tasks </Button>
                          </Card.Body>
                      </Card>
            </Col>
         </Row>
       </Container>
    </>
  );
}
