import React, { useRef } from 'react';
import './Login.css';
import {
  Container,
  Form,
  InputGroup,
  Button,
  Row,
  Col
} from 'react-bootstrap';




const Login = () => {


  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  

  const gologin = () => {
    // ดึงค่า username และ password จาก ref
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    alert(`Username: ${username}\nPassword: ${password}`);

  };

  return <Container> 
    
    <Row className="justify-content-md-center space-top">   
        <Col md="auto">
        ลงชื่อเข้าใช้ระบบ
        </Col>
    </Row>
    <Row className="space-top">
      <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
          <Form.Control 
          ref={usernameRef}
            placeholder="ใส่ชื่อผู้ใช้"
            aria-label="ใส่ชื่อผู้ใช้"
          />
        </InputGroup>      

        <InputGroup className="mb-3">
          
        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control type="password" 
        
          ref={passwordRef}
          placeholder="ใส่รหัสผ่าน"
          aria-label="ใส่รหัสผ่าน"
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={gologin}>
          ลงชื่อเข้าใช้งาน
        </Button>
      </InputGroup>
    </Row>
  </Container>


};

export default Login;
