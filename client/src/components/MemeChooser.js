import {Container, Row, Col} from 'react-bootstrap/'
import {MemeCard} from './MemeCard.js'

function MemeChooser(props){

    return(
        <Container fluid >

            <Row className="text-center m-2">
                <Col>
                    {props.loggedIn ? <h1>All memes</h1> : <h1>Public memes</h1>}
                </Col>
            </Row>
            {props.memes.map((m) => (<MemeCard meme={m} key={m.id} userInfo={props.userInfo} loggedIn={props.loggedIn}/>))}
        </Container>
    )
}

export {MemeChooser};