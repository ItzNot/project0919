import './EventPage.css';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
function CreateText() {
    let navigate = useNavigate();
    let [inputTitle, setInputTitle] = useState('');
    let [inputstartDate, setInputStartDate] =useState('');
    let [inputFinDate, setInputFinDate] =useState('');
    let [saveData, setSaveData] = useState([{}]);
    let [cloneList, setClonList] = useState([]);
    

    
    return (
        <div>
            <div className='bannner-PicBox'>
                <h3>이벤트</h3>
                <p>K리그 경기 승부 예측을 할 수 있는 이벤트 페이지입니다.</p>
            </div>
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
                        localStorage.setItem('json', JSON.stringify([{title:inputTitle, startDate:inputstartDate, finDate:inputFinDate}]));
                        localStorage.setItem('json1', JSON.stringify());
                        
                        
                        navigate('/EventPage');
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