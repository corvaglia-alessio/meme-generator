import {Container, Row, Col} from 'react-bootstrap/'

function MemeViewer(props){
    let texts = [];
    let assigned = 0;

    if(props.img.upleft){
        if(assigned===0) texts[0]=props.text1;
        else if(assigned===1) texts[0]=props.text2;
        else if(assigned===2) texts[0]=props.text3;
        else texts[0]="";
        assigned++;
    }
    if(props.img.upcenter){
        if(assigned===0) texts[1]=props.text1;
        else if(assigned===1) texts[1]=props.text2;
        else if(assigned===2) texts[1]=props.text3;
        else texts[1]="";
        assigned++;
    }
    if(props.img.upright){
        if(assigned===0) texts[2]=props.text1;
        else if(assigned===1) texts[2]=props.text2;
        else if(assigned===2) texts[2]=props.text3;
        else texts[2]="";
        assigned++;
    }
    if(props.img.centerleft){
        if(assigned===0) texts[3]=props.text1;
        else if(assigned===1) texts[3]=props.text2;
        else if(assigned===2) texts[3]=props.text3;
        else texts[3]="";
        assigned++;
    }
    if(props.img.centercenter){
        if(assigned===0) texts[4]=props.text1;
        else if(assigned===1) texts[4]=props.text2;
        else if(assigned===2) texts[4]=props.text3;
        else texts[4]="";
        assigned++;
    }
    if(props.img.centerright){
        if(assigned===0) texts[5]=props.text1;
        else if(assigned===1) texts[5]=props.text2;
        else if(assigned===2) texts[5]=props.text3;
        else texts[5]="";
        assigned++;
    }
    if(props.img.downleft){
        if(assigned===0) texts[6]=props.text1;
        else if(assigned===1) texts[6]=props.text2;
        else if(assigned===2) texts[6]=props.text3;
        else texts[6]="";
        assigned++;
    }
    if(props.img.downcenter){
        if(assigned===0) texts[7]=props.text1;
        else if(assigned===1) texts[7]=props.text2;
        else if(assigned===2) texts[7]=props.text3;
        else texts[7]="";
        assigned++;
    }
    if(props.img.downright){
        if(assigned===0) texts[8]=props.text1;
        else if(assigned===1) texts[8]=props.text2;
        else if(assigned===2) texts[8]=props.text3;
        else texts[8]="";
        assigned++;
    }

    var bckg = {backgroundImage: `url(${props.img.image})`};
    var style = {fontFamily: props.font, color: props.color, fontSize: `${props.size}px`};
    return(
        <Container style={bckg} className="Meme mt-5">
            <Row className="text-center mytext-up">
                <Col className="text-cut">
                    <div className="mytop" style={style}>{texts[0]}</div>
                </Col>
                <Col className="text-cut">
                    <div className="mytop" style={style}>{texts[1]}</div>
                </Col>
                <Col className="text-cut">
                    <div className="mytop" style={style}>{texts[2]}</div>
                </Col>
            </Row>
            <Row className="text-center mytext-center ">
                <Col className="text-cut">
                    <div className="middle" style={style}>{texts[3]}</div>

                </Col>
                <Col className="text-cut">
                    <div className="middle" style={style}>{texts[4]}</div>

                </Col>
                <Col className="text-cut">
                    <div className="middle" style={style}>{texts[5]}</div>

                </Col>
            </Row>
            <Row className="text-center mytext-down">
                <Col className="text-cut">
                    <div className="low" style={style}>{texts[6]}</div>
                </Col>
                <Col className="text-cut">
                    <div className="low" style={style}>{texts[7]}</div>
                </Col>
                <Col className="text-cut">
                    <div className="low" style={style}>{texts[8]}</div>
                </Col>
            </Row>
        </Container>
    )
}
export {MemeViewer};