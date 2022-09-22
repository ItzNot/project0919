import './EventPage.css';

function CreateText() {
    return (
        <div>
            <div className='bannner-PicBox'>
                <h3>이벤트</h3>
                <p>K리그 경기 승부 예측을 할 수 있는 이벤트 페이지입니다.</p>
            </div>
            <div className='BodyArea'>
                <div>
                    <div className='textTitle'>
                        {'글 제목 : '}<input type={'text'} id='titleId'/>
                    </div>
                    <div className='eventDate'>
                        {'참여 기간 : '}<input type={'date'} id='startDateId'/>
                        {' 까지 : '}<input type={'date'} id='finishDateId'/>
                    </div>
                </div>
                <div className='bodyText'>
                    {'글 내용 : '}<input type={'text'} id='bodyTextId'/>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default CreateText;