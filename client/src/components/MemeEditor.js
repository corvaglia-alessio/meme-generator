import {FormControl, InputGroup, Form, Container, Alert, Button} from 'react-bootstrap/';
import {CheckCircle} from 'react-bootstrap-icons';

function MemeEditor(props) {
  return (
      <Container className="Editor">
        <InputGroup className="mb-5"> 
            <FormControl placeholder="Meme title" aria-label="Meme title"/>
        </InputGroup>
        <InputGroup className="mb-3">
            <FormControl placeholder="Text Up" aria-label="Text Up"/>
        </InputGroup>
        <InputGroup className="mb-3">
            <FormControl placeholder="Text Center" aria-label="Text Center" disabled/>
        </InputGroup>
        <InputGroup className="mb-5">
            <FormControl placeholder="Text Down" aria-label="Text Down"/>
        </InputGroup>
        <InputGroup className="mb-5">
            <FormControl placeholder="Color" aria-label="Color" type="color"/>
            <FormControl className="w-75" placeholder="Font" variant="success" aria-label="Font" as="select">
                <option>aa</option>
                <option>bb</option>
            </FormControl>
        </InputGroup>
        <InputGroup className="mb-5">
            <Form.Check aria-label="Public"/> Let this meme to be public
        </InputGroup>
        <InputGroup className="mb-5">
            <Button variant="success">
                <CheckCircle color="white" className="mr-2" size= "30"/>
                Save
            </Button>
        </InputGroup>
        <Alert variant="danger">
          You must specify at least a title and one of the texts!
        </Alert>
    </Container>
  );
}

export {MemeEditor};