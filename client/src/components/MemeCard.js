import {Lock, Unlock, Subtract, Trash} from 'react-bootstrap-icons';
import {Card, Button} from 'react-bootstrap/'
import img from './2.jpg'


function MemeCard(props) {
  return (
    <Card border="primary" >
        <Card.Body>
            <Card.Title>Meme Title</Card.Title>
            <Card.Text> By: Author name</Card.Text>
            <Subtract color="grey" className="mr-2" size= "20"/>
            <Lock color="grey" className="mr-2" size= "20"/>
            <Unlock color="grey" className="mr-2" size= "20"/>
            <br></br>
            <Button variant="primary" className="mr-2 mt-3">
              <Subtract color="white" className="mr-2" size= "18"/>
              Copy
            </Button>
            <Button variant="primary" className="mt-3">
              <Trash color="white" className="mr-2" size= "18"/>
              Delete
            </Button>
        </Card.Body>
      </Card>   
  );
}

export {MemeCard};