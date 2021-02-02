import  React,{useState} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    CardImg,
    Image
} from 'react-bootstrap';

const Login = function(){

    const [user,setUser] = useState("Student");
     

    return(
       <Container>
           <Row>
                <Col>
                    <h3 style={{marginTop:"30px",color:"black"}}>Choose account type</h3>
                    <Row className="mb-4 ml-2">
                        <Image onClick={() => setUser("Student")} src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" style={{width:180,height:180}} roundedCircle/>
                    </Row>

                    <Row className="mb-4 ml-2">
                        <Image onClick={() => setUser("Teacher")} src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" roundedCircle style={{width:180,height:180}}/>
                    </Row>

                    <Row className="mb-4 ml-2">
                        <Image onClick={() => setUser("Admin")} src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" roundedCircle style={{width:180,height:180}}/>
                    </Row>

                    {/* <Card>
                    <div class="mb-2">
                        <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" width="150px" height="150px"></img>
                    </div>
                    <div class="mb-2">
                    <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" width="150px" height="150px"></img>
                    </div>
                    <div>
                    <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" width="150px" height="150px"></img>
                    </div>
                    </Card> */}
                </Col>
                <Col style={{marginTop:"20vh"}}>
                    <h3>Hello {user} <br/> Please fill our credentials to get started</h3>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
  
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
           </Row>
       </Container>
    );
}

export default Login;