import {Pencil} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap/'


function ImageCard(props) {
  return (
    <Card className="imageCard m-2" border="primary">
      <Card.Img variant="top" src={props.image.image} />
      <Card.Body>
        <Link to={"/editor/"+props.image.id}>
          <Button variant="primary">
                <Pencil color="white" className="mr-2" size= "18"/>
                Create Meme
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export {ImageCard};