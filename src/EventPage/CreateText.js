import './EventPage.css';
import {useNavigate} from 'react-router-dom';
function CreateText() {
    let navigate = useNavigate();
    return (
        <div>
            <div className='bannner-PicBox'>
                <h3>이벤트</h3>
                <p>K리그 경기 승부 예측을 할 수 있는 이벤트 페이지입니다.</p>
            </div>
            <div className='BodyArea'>
                <div className='BodyInputArea'>
                    <div className='textTitle'>
                        {'글 제목 : '}<input type={'text'} id='titleId'/>
                    </div>
                    <div className='eventDate'>
                        {'참여 기간 : '}<input type={'date'} id='startDateId'/>
                        {' 까지 : '}<input type={'date'} id='finishDateId'/>
                    </div>
                    <button id='finButton' onClick={()=>{
                        navigate('/EventPage')
                    }}>완료</button>
                </div>
                <div className='bodyText'>
                    <label for='bodyText'>
                        <textarea id='bodyTextId' placeholder='글 내용 작성'></textarea>
                    </label>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default CreateText;