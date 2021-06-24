import {Image} from 'react-bootstrap/'
import img from './2.jpg'
function MemeViewer(props){
    return(
        <>
            <h3 className="UpText">PinoInAlto</h3>
            <h3 className="CenterText">PinoAlCentro</h3>            
            <h3 className="DownText">PinoInBasso</h3>
            <Image src={img} rounded />
        </>
    )
}

export {MemeViewer};