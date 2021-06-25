import {Modal, Button, FormControl, InputGroup, Alert} from 'react-bootstrap/';
import {CheckCircle} from 'react-bootstrap-icons';

function LoginModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3"> 
          <FormControl placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl placeholder="Password" aria-label="Password" type="password" aria-describedby="basic-addon1"/>
        </InputGroup>
        <Alert variant="danger">
          Wrong username and/or password!
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">
          <CheckCircle color="white" className="mr-2" size= "30"/>
          Login
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export {LoginModal};