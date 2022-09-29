import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function EventComment({evenBanner2}) {
    let [saveComment, setSaveComment] = useState([]);
    let [inputComment, setInputComment] = useState('');
    let [showInputList, setShowInputList] = useState(false);
    let Writer = JSON.parse(localStorage.getItem('regist'));
    let navigate = useNavigate();
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let comToday = `${year}-${month}-${day}`;
    let commentData = JSON.parse(localStorage.getItem('comment'));
    let isLogin = JSON.parse(localStorage.getItem('boolData'));
    if(commentData==null) commentData = []; 
    return(
        <div>
            <div className='bannner-PicBox'>
                <h3>이벤트</h3>
                <p>K리그 이벤트에 참여 및 확인할 수 있는 페이지입니다</p>
            </div>
            <div className="main-picture">
                <img src={evenBanner2} style=
                {{
                    width:'95%',
                    height:'250px',
                    marginTop: '30px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer'
                    
                }} onClick={()=>{
                    window.location.href = 'https://www.youtube.com/watch?v=OCyO1aQfNNs';
                }}/>
            </div>
            <div className="body-comment">
            <div className='body-title'>
                <div className='ballImage'/>
                <p>댓글모음</p>
            </div>
                <div className="bottomTable">
                    <table className="commentTable">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>작성자</th>
                                    <th>내용</th>
                                    <th>작성날짜</th>
                                </tr>
                            </thead>
                            {commentData.map((data, i)=> {
                                return(
                                    <tbody>
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{Writer.registId}</td>
                                            <td>{data}</td>
                                            <td>{comToday}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                            <tbody>
                                        <tr style={{borderTop:'20px solid rgb(241, 235, 235)'}}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><button onClick={()=>{
                                                if(isLogin !== true) {
                                                    navigate('/signin');
                                                }
                                                else {
                                                    localStorage.removeItem('comment');
                                                    navigate('/EventComment')
                                                }
                                                
                                            }}>일괄삭제</button></td>
                                        </tr>
                            </tbody>
                    </table>
                </div>
                <div className="bottomCreateText">
                <button className="createTextbutton" onClick={()=>{
                    console.log(isLogin);
                    if(isLogin !== true) {
                        navigate('/signin');
                    }
                    else {
                        setShowInputList(true);
                    }
                }}>글쓰기</button>
            </div>
                {showInputList ? 
            <div>
            <div className='BodyArea'>
                <div className='BodyInputArea'>
                    <div className='textTitle'>
                        작성자 : {Writer.registId}
                    </div>
                    <div className='bodyText'>
                    <label for='bodyText'>
                        <textarea id='bodyTextId' placeholder='글 내용 작성' onChange={(e)=>{
                            setInputComment(e.target.value);
                        }}></textarea>
                    </label>
                    </div>
                    <button id='finButton' onClick={(e)=>{
                        e.preventDefault();
                        commentData.push(inputComment);
                        setSaveComment(commentData);
                        localStorage.setItem('comment', JSON.stringify(commentData));
                        setShowInputList(false);
                    }}>완료</button>
                </div>
            </div>
                </div> : null}
            </div>
        </div>
    )
    // function TableBody({i}) {
    //     return(
    //         <div>
    //             <tbody>
    //                 <tr>
    //                     <td>{i+1}</td>
    //                     <td>{Writer.registId}</td>
    //                     <td>{showComment.comment}</td>
    //                     <td>{comToday}</td>
    //                 </tr>
    //             </tbody>
    //         </div>
    //     )
    // }
}

export default EventComment;