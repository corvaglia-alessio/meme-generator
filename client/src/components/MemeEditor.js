import {FormControl, InputGroup, Form, Alert, Button, Row, Col} from 'react-bootstrap/';
import {MemeViewer} from './MemeViewer.js'
import {CheckCircle} from 'react-bootstrap-icons';
import { useState } from 'react';

function MemeEditor(props) {
    const [title, setTitle] = useState(props.meme==="0" ? "" : props.meme.title);
    const [color, setColor] = useState(props.meme==="0" ? "#000000" : props.meme.color);
    const [font, setFont] = useState(props.meme==="0" ? props.fonts[0].font : props.meme.font);
    const [size, setSize] = useState(props.meme==="0" ? 30 : props.meme.size)
    const [pub, setPub] = useState(props.meme==="0" ? false : props.meme.pub);
    const [err, setErr] = useState(false);
    const [msg, setMsg] = useState("");

    let cnt = 0;
    let input = ['', '', ''];
     if(props.meme!==0){
        if(props.meme.upleft) {input[cnt]=props.meme.upleft; cnt++}
        if(props.meme.upcenter) {input[cnt]=props.meme.upcenter; cnt++}
        if(props.meme.upright) {input[cnt]=props.meme.upright; cnt++}
        if(props.meme.centerleft) {input[cnt]=props.meme.centerleft; cnt++}
        if(props.meme.centercenter) {input[cnt]=props.meme.centercenter; cnt++}
        if(props.meme.centerright) {input[cnt]=props.meme.centerright; cnt++}
        if(props.meme.downleft) {input[cnt]=props.meme.downleft; cnt++}
        if(props.meme.downcenter) {input[cnt]=props.meme.downcenter; cnt++}
        if(props.meme.downright) {input[cnt]=props.meme.downright; cnt++}
    }

    const [text1, setText1] = useState(input[0]);
    const [text2, setText2] = useState(input[1]);
    const [text3, setText3] = useState(input[2]);

    const sub = async (event) => {

        event.preventDefault();
        setErr(false);
        setMsg("");

        let valid = true;

        if (title === '') {
            valid = false;
            setMsg("Title cannot be empty!");
            setErr(true);
        }

        if(((text1 === '') && (text2 === '') && (text3===''))){
            valid = false;
            setMsg("At least one text!");
            setErr(true);
        }

        if(size==="" || size<0){
            valid=false;
            setMsg("Size should be a positive integer!");
            setErr(true);
        }

        if(valid){
        try{
        }
        catch (e) {
        }
        }
    }

    let i = 0;
    if(props.img.upleft) i++;
    if(props.img.upcenter) i++;
    if(props.img.upright) i++;
    if(props.img.centerleft) i++;
    if(props.img.centercenter) i++;
    if(props.img.centerright) i++;
    if(props.img.downleft) i++;
    if(props.img.downcenter) i++;
    if(props.img.downright) i++;

    return (
            <Row>
                <Col className="">
                    <MemeViewer img={props.img} text1={text1} text2={text2} text3={text3} font={font} color={color} size={size}/>
                </Col>
                <Col className="mt-5">
                    <Form onSubmit={sub}>
                        <InputGroup className="mb-5 mt-2"> 
                            <FormControl placeholder="Meme title" aria-label="Meme title" value={title} onChange={(ev)=>setTitle(ev.target.value)}/>
                        </InputGroup>
                        { i>=1 ? 
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Text 1" aria-label="Text 1" value={text1} onChange={(ev)=>setText1(ev.target.value)}/>
                            </InputGroup>
                            :
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Text 1" aria-label="Text 1" value={text1} onChange={(ev)=>setText1(ev.target.value)} disabled/>
                            </InputGroup>
                        }
                        { i>=2 ?
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Text 2" aria-label="Text 2" value={text2} onChange={(ev)=>setText2(ev.target.value)}/>
                            </InputGroup>
                            :
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Text 2" aria-label="Text 2" value={text2} onChange={(ev)=>setText2(ev.target.value)} disabled/>
                            </InputGroup>
                        }
                        {i>=3 ?
                            <InputGroup className="mb-5">
                                <FormControl placeholder="Text 3"  aria-label="Text 3" value={text3} onChange={(ev)=>setText3(ev.target.value)}/>
                            </InputGroup>
                            :
                            <InputGroup className="mb-5">
                                <FormControl placeholder="Text 3"  aria-label="Text 3" value={text3} onChange={(ev)=>setText3(ev.target.value)} disabled/>
                            </InputGroup>
                        }
                        <InputGroup className="mb-5">
                            <FormControl placeholder="Color" aria-label="Color" type="color" value={color} onChange={(ev)=>setColor(ev.target.value)}/>
                            <FormControl className="w-75" value={font} onChange={(ev)=>setFont(ev.target.value)} placeholder="Font" variant="success" aria-label="Font" as="select">
                                {props.fonts.map(f => <option key={f.id} value={f.font}>{f.font}</option>)}
                            </FormControl>
                            <FormControl placeholder="Size" type="number" aria-label="Size" value={size} onChange={(ev)=>setSize(ev.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-5">
                            { props.meme!=="0" && props.meme.pub===0 ?
                                <Form.Check type="checkbox" aria-label="Public" checked={pub} onChange={(ev)=>setPub(ev.target.checked)} disabled/>
                                :
                                <Form.Check type="checkbox" aria-label="Public" checked={pub} onChange={(ev)=>setPub(ev.target.checked)}/>
                            }
                            Public meme
                        </InputGroup>
                        <InputGroup className="mb-5">
                            <Button variant="success" type="submit">
                                <CheckCircle color="white" className="mr-2" size= "30"/>
                                Save
                            </Button>
                        </InputGroup>
                        <Alert variant="danger" show={err}>
                            {msg}
                        </Alert>
                    </Form>
                </Col>
            </Row>
    );
}

export {MemeEditor};