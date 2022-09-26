import './EventPage.css';
import {json, useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
function CreateText() {
    let navigate = useNavigate();
    let [inputTitle, setInputTitle] = useState('');
    let [inputstartDate, setInputStartDate] =useState(0);
    let [inputFinDate, setInputFinDate] =useState(0);
    let [saveData, setSaveData] = useState([]);
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
                        <button id='finButton' onClick={(e)=>{
                        e.preventDefault();
                        //저장된 값 가져오고 (localStorage)
                        let tempData = JSON.parse(localStorage.getItem('json'));
                        if(tempData==null) tempData = [];                        
                        //새로운 객체를 만들고
                        //앞에 unshift 로 넣고
                        tempData.unshift({title:inputTitle, startDate:inputstartDate, finDate:inputFinDate});
                        //다시 저장하기 (localStorage)
                        setSaveData(tempData);
                        if(inputFinDate < inputstartDate) {
                            alert('날짜를 다시 입력하세요');
                        }
                        else if(inputTitle == '') {
                            alert('제목을 입력하세요.');
                        }
                        else if(inputFinDate == 0 || inputstartDate == 0) {
                            alert('날짜가 설정되지 않았습니다.');
                        }
                        else {
                            localStorage.setItem('json', JSON.stringify(tempData));
                            navigate('/EventPage');

                        }
                        // localStorage.setItem('json', JSON.stringify([{title:inputTitle, startDate:inputstartDate, finDate:inputFinDate}]));
                        // let saveStorage = JSON.parse(localStorage.getItem('json'));
                        // let temp6 = [...saveData];
                        // temp6.unshift(saveStorage);
                        // console.log(temp6);
                        // setSaveData(temp6);
                        // localStorage.setItem('json', JSON.stringify(saveData));

                    }}>완료</button>
                    </div>
                    {/* <BtnSData></BtnSData> */}
                    
                </div>
                <div className='bodyText'>
                    <label for='bodyText'>
                        <textarea id='bodyTextId' placeholder='글 내용 작성'></textarea>
                    </label>
                </div>
            </div>
        </div>
    )
    // function BtnSData() {
    //     let [sData, setSData] = useState(()=>
    //     JSON.parse(localStorage.getItem('json')));

    //     useEffect(()=> {
    //         localStorage.setItem('json', JSON.stringify([{title:inputTitle, startDate:inputstartDate, finDate:inputFinDate}]));
    //     }, [sData])
    //     return(
    //         <button id='finButton' onClick={(e)=>{
    //             // e.preventDefault();
                
    //             let saveStorage = JSON.parse(localStorage.getItem('json'));
    //             // let temp6 = [...saveData];
    //             // temp6.unshift(saveStorage);
    //             // setSaveData(temp6);
    //             // localStorage.setItem('json', JSON.stringify(saveData));
    //             navigate('/EventPage');
    //         }}>완료</button>
    //     )
    // }
}

export default CreateText;