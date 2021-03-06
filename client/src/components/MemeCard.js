import {Lock, Unlock, Subtract, Trash, AspectRatio} from 'react-bootstrap-icons';
import {Card, Button} from 'react-bootstrap/'
import {Link} from 'react-router-dom';
import API from '../API';

function MemeCard(props) {

  const del = async () => {
    await API.deleteMeme(props.meme.id);
    props.setDirty(true);
  }

  return (
    <Card border="primary" className={"text-center m-4 card "+props.className}>
        <Card.Body>
            <Card.Title>{props.meme.title}</Card.Title>
            <Card.Text>By: {props.meme.name}</Card.Text>
            <p>
            {props.meme.pub ? <><Unlock color="grey" className="" size= "20"/> This meme is public</> : <><Lock color="grey" className="" size= "20"/> This meme is protected</>}
            {props.meme.copy ? <><Subtract color="grey" className="mr-2 ml-3" size= "20"/>This meme is a copy</> : <></> }
            </p>
            {props.view === "true" ? 
            <Link to={"/view/"+props.meme.id}>
              <Button variant="success" className="mr-2 ">
                <AspectRatio color="white" className="mr-2" size= "18"/>
                View
              </Button>
            </Link>
            :
            <></>
            }
            {props.loggedIn ?
            <Link to={"/copy/"+props.meme.id}>
              <Button variant="primary" className="mr-2 ">
                <Subtract color="white" className="mr-2" size= "18"/>
                  Copy
              </Button>
            </Link> 
              :
              <Button variant="primary" className="mr-2 "disabled>
                <Subtract color="white" className="mr-2" size= "18"/>
                 Copy
              </Button>
            }
            {(props.loggedIn && (props.userInfo.id === props.meme.userid)) ?
              <Link to="/">
                <Button variant="danger" onClick={() => del()}>
                  <Trash color="white" className="mr-2" size= "18"/>
                  Delete
                </Button>
              </Link>
              :
              <Button variant="danger" disabled>
                <Trash color="white" className="mr-2" size= "18"/>
                Delete
              </Button>
            }
        </Card.Body>
      </Card>   
  );
}

export {MemeCard};