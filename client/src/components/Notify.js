import {CheckCircle, ExclamationCircle } from 'react-bootstrap-icons';
import {Alert} from 'react-bootstrap/'


function Notify(props){
    return(
        <>
            { props.variant==="success" ?
            
                <Alert variant="success" className="mt-2" show={props.show} onClose={() => props.setShow(false)} dismissible>
                <Alert.Heading>
                    <CheckCircle color="green" className="mr-2" size= "40"/>
                        {props.msg}
                    </Alert.Heading>
                </Alert>

                :

                <Alert variant="danger" className="mt-2" show={props.showMsg} onClose={() => props.setShowMsg(false)}>
                <Alert.Heading>
                    <ExclamationCircle color="red" className="mr-2" size= "40"/>
                        {props.msg}
                    </Alert.Heading>
                </Alert>
            }
        </>
    );
}

export {Notify};