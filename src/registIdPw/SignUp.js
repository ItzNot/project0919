import './registration.css';
import klogoimg from '../images/123.JPG';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
function SignUp() {
    let [inputId, setInputId] = useState('');
    let [inputPw, setInputPw] = useState('');
    let navigate = useNavigate();
    return (
        <div>
            <div className='bgColor'>
                <div className='body-titleText'>
                    <img src={klogoimg} style={{width:'220px'}}></img>
                    <strong>회원가입</strong>
                </div>
                <div className='body-inputTextId'>
                    <label for='labelText'>
                    <p>아이디 :</p><input type='text' id='txtId' onChange={(e)=>{
                            setInputId(e.target.value);
                        }}></input>
                    </label>
                    
                </div>
                <div className='body-inputTextPw'>
                    <label for='labelText'>
                        <p>비밀번호 :</p><input type='password' id='txtPw' onChange={(e1)=>{
                            setInputPw(e1.target.value);
                        }}></input>
                    </label>
                </div>
                <div className='btnlogin'>
                    <button id='login' onClick={(e)=>{
                        e.preventDefault();
                        if(inputId == '' || inputPw == '') {
                            alert('아이디, 패스워드가 입력되지 않았습니다.')
                        }
                        else {
                            localStorage.setItem('regist', JSON.stringify({registId:inputId, registPw:inputPw}));
                            navigate('/');
                        }
                        
                    }}>등록</button>
                </div>
                
            </div>
        </div>
    )
}

export default SignUp;