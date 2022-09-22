import './EventPage.css';
import {Outlet, useNavigate} from 'react-router-dom';


function EventPage({evenBanner1}) {
    let navigete = useNavigate();
    return (
        <div>
            <div>
                <div className='bannner-PicBox'>
                    <h3>이벤트</h3>
                    <p>K리그 경기 승부 예측을 할 수 있는 이벤트 페이지입니다.</p>
                </div>
            </div>
            <Outlet/>
            <div className="main-PicArea">
                <img src={evenBanner1} style=
                {{
                    width:'95%',
                    height:'180px',
                    marginTop: '30px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer'
                    
                }} onClick={()=>{
                    window.location.href = '/EventPage';
                }}/>
            </div>
            <div className='bottomTable'>
                <table className="EventTable">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>상태</th>
                            <th>제목</th>
                            <th>참여기간</th>
                            <th>참여인원</th>
                            <th>결과</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>마감</td>
                            <td>2022 K리그1 30R 승부예측</td>
                            <td>2022-09-14 08:10 ~ 2022-09-17 11:30</td>
                            <td>1440</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>마감</td>
                            <td>2022 K리그1 29R 승부예측</td>
                            <td>2022-09-06 10:15 ~ 2022-09-10 11:30</td>
                            <td>1681</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>마감</td>
                            <td>2022 K리그1 28R 승부예측</td>
                            <td>2022-08-30 09:00 ~ 2022-09-02 17:00</td>
                            <td>1448</td>
                            <td>-</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="bottomCreateText">
                <button className="createTextbutton" onClick={()=>{
                    window.location.href = '/EventPage/CreateText'
                }}>글쓰기</button>

            </div>

        </div>        

    )
    
}

export default EventPage;