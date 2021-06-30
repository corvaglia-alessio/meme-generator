import {FormControl, InputGroup, Form, Alert, Button, Row, Col} from 'react-bootstrap/';
import {MemeViewer} from './MemeViewer.js'
import {CheckCircle} from 'react-bootstrap-icons';
import { useState } from 'react';

function MemeEditor(props) {
    const [title, setTitle] = useState(props.meme===0 ? "" : props.meme.title);
    const [text1, setText1] = useState(props.meme===0 ? "" : props.meme.title);
    const [text2, setText2] = useState(props.meme===0 ? "" : props.meme.title);
    const [text3, setText3] = useState(props.meme===0 ? "" : props.meme.title);
    const [color, setColor] = useState(props.meme===0 ? "" : props.meme.color);
    const [font, setFont] = useState(props.meme===0 ? "" : props.meme.font);
    const [pub, setPub] = useState(props.meme===0 ? "" : props.meme.pub);
    const [err, setErr] = useState(false);

    const sub = async (event) => {

    event.preventDefault();
    setErr(false);

    let valid = true;
    if (title === '' || ((text1 === '') && (text2 === '') && (text3===''))) {
      valid = false;
      setErr(true);
    }

    if(valid){
      try{
      }
      catch (e) {
      }
    }
  }

    return (
            <Row>
                <Col className="">
                    <MemeViewer img={props.img} text1={text1} text2={text2} text3={text3} font={font} color={color}/>
                </Col>
                <Col className="mt-5">
                    <Form onSubmit={sub}>
                        <InputGroup className="mb-5 mt-2"> 
                            <FormControl placeholder="Meme title" aria-label="Meme title" value={title} onChange={(ev)=>setTitle(ev.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Text 1" aria-label="Text 1" value={text1} onChange={(ev)=>setText1(ev.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Text 2" aria-label="Text 2" value={text2} onChange={(ev)=>setText2(ev.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-5">
                            <FormControl placeholder="Text 3"  aria-label="Text 3" value={text3} onChange={(ev)=>setText3(ev.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-5">
                            <FormControl placeholder="Color" aria-label="Color" type="color" value={color} onChange={(ev)=>setColor(ev.target.value)}/>
                            <FormControl className="w-75" value={font} onChange={(ev)=>setFont(ev.target.value)} placeholder="Font" variant="success" aria-label="Font" as="select">
                                {props.fonts.map(f => <option key={f.id} value={f.font}>{f.font}</option>)}
                            </FormControl>
                        </InputGroup>
                        <InputGroup className="mb-5">
                            <Form.Check aria-label="Public" unchecked={pub} onChange={(ev)=>setPub(ev.target.value)}/> Public meme
                        </InputGroup>
                        <InputGroup className="mb-5">
                            <Button variant="success" type="submit">
                                <CheckCircle color="white" className="mr-2" size= "30"/>
                                Save
                            </Button>
                        </InputGroup>
                        <Alert variant="danger" show={err}>
                            At least a title and one text!
                        </Alert>
                    </Form>
                </Col>
            </Row>
    );
}

export {MemeEditor};