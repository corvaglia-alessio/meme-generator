import {Lock, Unlock, Subtract} from 'react-bootstrap-icons';
import {Card} from 'react-bootstrap/'
import img from './2.jpg'


function MemeCard(props) {
  return (
    <Card border="primary" >
        <Card.Body>
            <Card.Img className="MemeCard" src={img} />
            <Card.Title>Meme Title</Card.Title>
            <Card.Text> By: Author name</Card.Text>
            <Subtract color="grey" className="mr-2" size= "20"/>
            <Lock color="grey" className="mr-2" size= "20"/>
            <Unlock color="grey" className="mr-2" size= "20"/>

        </Card.Body>
    </Card>   
  );
}

export {MemeCard};