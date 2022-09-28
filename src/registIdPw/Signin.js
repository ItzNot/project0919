import './registration.css';
import klogoimg from '../images/123.JPG';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
function Signin({showHeaderBar}) {
    let [compareId, setCompareId] = useState("");
    let [comparePw, setComparePw] = useState("");
    let navigate = useNavigate();
    return (
        <div>
            <div className='bgColor'>
                <div className='body-titleText'>
                    <img src={klogoimg} style={{width:'220px'}}></img>
                    <strong>로그인</strong>
                </div>
                <div className='body-inputTextId'>
                    <label for='labelText'>
                    <p>아이디 :</p><input type='text' id='txtId' onChange={(e)=>{
                            setCompareId(e.target.value);
                        }}></input>
                    </label>
                    
                </div>
                <div className='body-inputTextPw'>
                    <label for='labelText'>
                        <p>비밀번호 :</p><input type='password' id='txtPw' onChange={(e1)=>{
                            setComparePw(e1.target.value);
                        }}></input>
                    </label>
                </div>
                <div className='btnlogin'>
                    <button id='login' onClick={(e)=>{
                        e.preventDefault();
                        console.log(showHeaderBar);
                        let compareData = JSON.parse(localStorage.getItem('regist'));
                        if(compareId == '' || comparePw == '') {
                            alert('아이디, 패스워드가 입력되지 않았습니다.')
                        }
                        else if(compareId !== compareData.registId) {
                            alert('아이디가 일치하지 않습니다.')
                        }
                        else if(comparePw !== compareData.registPw) {
                            alert('비밀번호가 일치하지 않습니다.')
                        }
                        else {
                            localStorage.setItem('boolData', true);
                            navigate('/');
                        }
                        
                    }}>로그인</button>
                </div>
                
            </div>
        </div>
    )
}

export default Signin;