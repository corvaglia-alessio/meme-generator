import {FormControl, InputGroup, Form, Container, Alert, Button} from 'react-bootstrap/';
import {CheckCircle} from 'react-bootstrap-icons';
import { useState } from 'react';

function MemeEditor(props) {
    const [title, setTitle] = useState(props.title);
    const [text1, setText1] = useState(props.text1);
    const [text2, setText2] = useState(props.text2);
    const [text3, setText3] = useState(props.text3);
    const [color, setColor] = useState(props.color);
    const [font, setFont] = useState(props.font);
    const [pub, setPub] = useState(props.pub);


    return (
        <Container className="mt-5 Editor">
            <InputGroup className="mb-5"> 
                <FormControl placeholder="Meme title" aria-label="Meme title" value={title} onChange={(ev)=>setTitle(ev.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Text 1" aria-label="Text 1" value={text1} onChange={(ev)=>setText1(ev.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Text 2" aria-label="Text 2" value={text2} onChange={(ev)=>setText2(ev.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-5">
                <FormControl placeholder="Text 3" aria-label="Text 3" value={text3} onChange={(ev)=>setText3(ev.target.value)}/>
            </InputGroup>
            <InputGroup className="mb-5">
                <FormControl placeholder="Color" aria-label="Color" type="color" value={color} onChange={(ev)=>setColor(ev.target.value)}/>
                <FormControl className="w-75" value={font} onChange={(ev)=>setFont(ev.target.value)} placeholder="Font" variant="success" aria-label="Font" as="select">
                    <option>aa</option>
                    <option>bb</option>
                </FormControl>
            </InputGroup>
            <InputGroup className="mb-5">
                <Form.Check aria-label="Public" checked={pub} onChange={(ev)=>setPub(ev.target.value)}/> Public meme
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