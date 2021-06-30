import {Container, Row, Col} from 'react-bootstrap/'

function MemeViewer(props){
    var bckg = {backgroundImage: `url(${props.img.image})`};
    var style = {fontFamily: props.font, color: props.color, fontSize: 30};
    return(
        <Container style={bckg} className="Meme mt-5">
            <Row className="text-center mytext-up">
                <Col className="text-cut">
                    <div className="mytop" style={style}></div>
                </Col>
                <Col className="text-cut">
                    <div className="mytop" style={style}>{props.text1}</div>
                </Col>
                <Col className="text-cut">
                    <div className="mytop" style={style}></div>
                </Col>
            </Row>
            <Row className="text-center mytext-center ">
                <Col className="text-cut">
                    <div className="middle" style={style}>{props.text2}</div>

                </Col>
                <Col className="text-cut">
                    <div className="middle" style={style}>{props.text2}</div>

                </Col>
                <Col className="text-cut">
                    <div className="middle" style={style}>{props.text2}</div>

                </Col>
            </Row>
            <Row className="text-center mytext-down">
                <Col className="text-cut">
                    <div className="low" style={style}>{props.text3}</div>
                </Col>
                <Col className="text-cut">
                    <div className="low" style={style}>{props.text3}</div>
                </Col>
                <Col className="text-cut">
                    <div className="low" style={style}>{props.text3}</div>
                </Col>
            </Row>
        </Container>
    )
}

export {MemeViewer};