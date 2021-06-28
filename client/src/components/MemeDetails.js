import {Button, Container, InputGroup} from 'react-bootstrap/';
import {Subtract} from 'react-bootstrap-icons';

function MemeDetails(props) {
  return (
    <Container className="Details">
        <h1>Meme Title</h1>
        <h4>By: Author</h4>
        <Button variant="primary" className="m-4">
          <Subtract color="white" className="mr-2" size= "30"/>
          Copy
        </Button>
    </Container>
  );
}

export {MemeDetails};