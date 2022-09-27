import './VideoPage.css';
import ReactPlayer from "react-player";
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Video001() {
    let navigate = useNavigate();
        return (
            <div>
                <div className='body-video'>
                    <ReactPlayer className="player" url="https://youtu.be/pW0m_TRt1xU" width="700px" height="400px" />
                </div>
                <div className='bottomBtn'>
                <Button variant="primary" onClick={()=>{
                    navigate('/videoPage');
                }}>목록으로</Button>
            </div>
            </div>
        )
    
    
}

export default Video001;