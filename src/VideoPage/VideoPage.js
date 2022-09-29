import './VideoPage.css';
import {Card, Button} from 'react-bootstrap';
import {Outlet, useNavigate} from 'react-router-dom';
import { useState } from 'react';
function VideoPage() {
    let navigate = useNavigate();
    let [videoInfo, setVideoInfo] = useState([
    {
        viPath:'/videoPage/vi001',
        viImg:"https://i.ytimg.com/vi/pW0m_TRt1xU/maxresdefault.jpg",
        viText:'[하나원큐 K리그1] R33 강원 vs 제주 하이라이트 (2022-09-18)'
    },
    {
        viPath:'/videoPage/vi002',
        viImg:"https://i.ytimg.com/vi/5K3jNmx2IWo/maxresdefault.jpg",
        viText:'[하나원큐 K리그1] R33 울산 vs 수원FC 하이라이트 (2022-09-18)'
    }
    ]);
    return(
        <div>
            <div className="bannner-PicBox">
                <h3>영상</h3>
                <p>K리그의 하이라이트 영상을 보실 수 있는 공간입니다.</p>
            </div>
            <div className='body-title'>
                <div className='ballImage'/>
                <p>하이라이트 모음</p>
            </div>
            <Outlet/>
            <div className='body-videolist'>
                {videoInfo.map((data, i)=> {
                    <Card style={{ width: '300px', height:'150px' }} onClick={()=>{
                        navigate(data.viPath);
                    }}>
                        <Card.Img style={{height:'150px'}} variant="top" src={data.viImg} />
                        <Card.Body>
                            <Card.Text>
                                {data.viText}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </div>
            
            
        </div>
    )
}

export default VideoPage;