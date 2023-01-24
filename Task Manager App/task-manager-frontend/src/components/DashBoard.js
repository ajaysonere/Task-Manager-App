import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";

export function DashBoard() {
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
                                  <Alert variant="primary">  Tasks : 10 </Alert>
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
                                  <Alert variant="success">  Tasks : 3 </Alert>
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
                                  <Alert variant="danger">  Tasks : 5 </Alert>
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
