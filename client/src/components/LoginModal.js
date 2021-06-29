import {Modal, Button, FormControl, InputGroup, Alert, Form} from 'react-bootstrap/';
import {CheckCircle} from 'react-bootstrap-icons';
import { useState } from 'react';
import API from '../API';


function LoginModal(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongInput, setWrongInput] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const credentials = { username, password };

    let valid = true;
    if (username === '' || password === '') {
      valid = false;
      setError('Email and password cannot be empty!');
      setWrongInput(true);
    }

    if(valid){
      try{
        const user = await API.login(credentials);
        console.log(user);
        props.setUserInfo(user);
        props.setLoggedIn(true);
        props.setShowLoginModal(false);
        setWrongInput(false);
        setError("");
      }
      catch (e) {
        setError("Invalid email and/or password!");
        setWrongInput(true);
      }
    }
  }
  
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={submit}>
          <Modal.Body>
            <InputGroup className="mb-3"> 
              <FormControl placeholder="Email" aria-label="Email" type="email" value={username} onChange={(ev)=>setUsername(ev.target.value)} aria-describedby="basic-addon1"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl placeholder="Password" aria-label="Password" type="password" value={password} onChange={(ev)=>setPassword(ev.target.value)} aria-describedby="basic-addon1"/>
            </InputGroup>
            <Alert variant="danger" show={wrongInput}>
              {error}
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="success">
              <CheckCircle color="white" className="mr-2" size= "30"/>
              Login
              </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
}

export {LoginModal};