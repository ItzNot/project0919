import './EventPage.css';
import {Navigate, Outlet, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";


function EventPage({evenBanner1}) {
    let navigate = useNavigate();
    let [showInputList, setShowInputList] = useState(false);
    let [inputTitle, setInputTitle] = useState('');
    let [inputstartDate, setInputStartDate] =useState('');
    let [inputFinDate, setInputFinDate] =useState('');
    let evenData = JSON.parse(localStorage.getItem('json'));
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let comToday = new Date(`${year}-${month}-${day}`);
    if(evenData==null) evenData = []; 
    return (
        <div>
            <div>

                <div className='bannner-PicBox'>
                    <h3>이벤트</h3>
                    <p>K리그 경기 승부 예측을 할 수 있는 이벤트 페이지입니다.</p>
                </div>
            </div>
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
                        {evenData.map((data, i)=> {
                            let endDay = new Date(data.finDate);
                            return(
                                <tr>
                                <td>{evenData.length-i}</td>
                                <td style={{backgroundColor:'gray', color:'white'}}>{endDay < comToday ? "마감" : "진행"}</td>
                                <td>{data.title}</td>
                                <td>{data.startDate} ~ {data.finDate}</td>
                                <td>0</td>
                                <td>-</td>
                            </tr> 
                            )
                        })}
                        <tr style={{borderTop:'20px solid rgb(241, 235, 235)'}}>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td onClick={()=>{
                                localStorage.removeItem('json');
                                navigate("/EventPage");
                            }}><button>일괄삭제</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bottomCreateText">
                <button className="createTextbutton" onClick={()=>{
                    // setShowInputList(true);
                    // localStorage.clear();
                    navigate("/EventPage/CreateText")
                }}>글쓰기</button>

            </div>
            {/* {showInputList ? 
            <div>
            <div className='BodyArea'>
                <div className='BodyInputArea'>
                    <div className='textTitle'>
                        글 제목 : <input type='text' id='titleId' onChange={(e)=>{
                            setInputTitle(e.target.value);
                        }}></input>
                    </div>
                    <div className='eventDate'>
                        참여 기간 : <input type='date' id='startDateId' onChange={(e1)=>{
                            setInputStartDate(e1.target.value);
                        }}/>
                        까지 : <input type='date' id='finishDateId' onChange={(e2)=>{
                            setInputFinDate(e2.target.value);
                        }}/>
                    </div>
                    <button id='finButton' onClick={(e)=>{
                        e.preventDefault();
                        localStorage.setItem('json', JSON.stringify({title:inputTitle, startDate:inputstartDate, finDate:inputFinDate}));
                        const keys = Object.keys(localStorage);
                        for (const key of keys) {
                            let temp = [...saveData];
                            temp.unshift(JSON.parse(localStorage.getItem('json')));
                            setSaveData(temp);
                        };
                        setShowInputList(false);
                    }}>완료</button>
                </div>
                <div className='bodyText'>
                    <label for='bodyText'>
                        <textarea id='bodyTextId' placeholder='글 내용 작성'></textarea>
                    </label>
                </div>
            </div>
                </div> : null} */}

        </div>        
    )
}


export default EventPage;