import {FormControl, InputGroup, Form, Alert, Button, Row, Col} from 'react-bootstrap/';
import {MemeViewer} from './MemeViewer.js'
import {CheckCircle} from 'react-bootstrap-icons';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import API from '../API';

function MemeEditor(props) {
    const [title, setTitle] = useState(props.meme==="0" ? "" : props.meme.title);
    const [color, setColor] = useState(props.meme==="0" ? "#000000" : props.meme.color);
    const [font, setFont] = useState(props.meme==="0" ? props.fonts[0].font : props.meme.font);
    const [size, setSize] = useState(props.meme==="0" ? 30 : props.meme.size)
    const [pub, setPub] = useState(props.meme==="0" ? false : props.meme.pub);
    const [err, setErr] = useState(false);
    const [msg, setMsg] = useState("");
    const [text1, setText1] = useState(props.meme==="0" ? "" : props.meme.text1);
    const [text2, setText2] = useState(props.meme==="0" ? "" : props.meme.text2);
    const [text3, setText3] = useState(props.meme==="0" ? "" : props.meme.text3);

    //count how many text area the image define in order to enable the exact number of text inputs
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

    const send = async () => {

        setErr(false);
        setMsg("");

        //form validation
        let valid = true;
        if (title === '') {
            valid = false;
            setMsg("Title cannot be empty!");
            setErr(true);
        }
        else if(((text1 === '') && (text2 === '') && (text3===''))){
            valid = false;
            setMsg("At least one text!");
            setErr(true);
        }
        else if(size==="" || size<0){
            valid=false;
            setMsg("Size should be a positive integer!");
            setErr(true);
        }

        if(valid){
            //create the meme object
            let m = {};
            m.title = title;
            m.imageid = props.img.id;
            m.pub = pub ? 1 : 0;
            m.userid = props.userInfo.id;
            m.copy = props.meme==="0" ? 0 : 1;
            m.color = color;
            m.fontid = props.fonts.find(f => f.font === font).id;         
            m.size = size;
            m.text1 = text1;
            m.text2 = text2;
            m.text3 = text3;
            await API.addMeme(m);
            props.setDirty(true);
        }
    }

    return (
            <Row>
                <Col className="">
                    <MemeViewer img={props.img} text1={text1} text2={text2} text3={text3} font={font} color={color} size={size}/>
                </Col>
                <Col className="mt-5">
                    <Form onSubmit={send}>
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
                            { props.meme!=="0" && props.meme.pub===0 && props.userInfo.id !== props.meme.userid ?
                                <Form.Check type="checkbox" aria-label="Public" checked={pub} onChange={(ev)=>setPub(ev.target.checked)} disabled/>
                                :
                                <Form.Check type="checkbox" aria-label="Public" checked={pub} onChange={(ev)=>setPub(ev.target.checked)}/>
                            }
                            Public meme
                        </InputGroup>
                        <InputGroup className="mb-5">
                            <Link to="/">
                                <Button variant="success" onClick={() => send()}>
                                    <CheckCircle color="white" className="mr-2" size= "30"/>
                                    Save
                                </Button>
                            </Link>
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