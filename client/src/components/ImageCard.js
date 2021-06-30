import {Pencil} from 'react-bootstrap-icons';
import {Card, Button} from 'react-bootstrap/'


function ImageCard(props) {
  return (
    <Card className="imageCard m-2" border="primary">
      <Card.Img variant="top" src={props.image.image} />
      <Card.Body>
        <Button variant="primary">
                <Pencil color="white" className="mr-2" size= "18"/>
                Create Meme
        </Button>
      </Card.Body>
    </Card>
  );
}

export {ImageCard};