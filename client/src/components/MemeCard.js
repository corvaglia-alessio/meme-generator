import {Lock, Unlock, Subtract, Trash} from 'react-bootstrap-icons';
import {Card, Button} from 'react-bootstrap/'
import img from './2.jpg'


function MemeCard(props) {
  return (
    <Card border="primary" className="text-center m-4">
        <Card.Body>
            <Card.Title>{props.meme.title}</Card.Title>
            <Card.Text>By: {props.meme.name}</Card.Text>
            {props.meme.pub ? <p><Unlock color="grey" className="" size= "20"/> This meme is public</p> : <p><Lock color="grey" className="" size= "20"/> This meme is protected</p>}
            {props.meme.copy ? <p><Subtract color="grey" className="mr-2" size= "20"/>This meme is a copy </p> : <></> }
            <Button variant="primary" className="mr-2 ">
              <Subtract color="white" className="" size= "18"/>
              Make a copy
            </Button>
            {(props.loggedIn && (props.userInfo.id === props.meme.userid)) ?
              <Button variant="danger">
                <Trash color="white" className="" size= "18"/>
                Delete this meme
              </Button>
              :
              <Button variant="danger" disabled>
                <Trash color="white" className="" size= "18"/>
                Delete this meme
              </Button>
            }
        </Card.Body>
      </Card>   
  );
}

export {MemeCard};