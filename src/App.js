import logo from './logo.svg';
import './App.css';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import ulsanImg from './images/Ulsan_Hyundai_FC.svg.png';
import jejuImg from "./images/Jeju_United_FC.svg.png";
import { useState } from "react";
import {useNavigate, Routes, Route, Link} from 'react-router-dom';
import TeamInfo from './Components/TeamInfo.js';

function App() {
  // let [showLogo, setShowLogo] = useState([ulsanImg, jejuImg]);
  // let [showTeam, setShowTeam] = useState(['ulsan', 'jeju']);
  let [showTeam, setShowTeam] = useState([
    {
      id:"teamUlsan",
      teamName:"울산",
      imgPath:ulsanImg
    },
    {
      id:"teamJeju",
      teamName:"제주",
      imgPath:jejuImg
    }

  ])
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className='header-minbar'>
        <span>로그인</span>|<span>회원가입</span>
      </div>
      <div className='header-bar'>
        <Link to='/'><div className='k-logo'/></Link> 
        <Container style={{display:'flex', justifyContent:'flex-end'}}>
          <Row xs="auto">
            {showTeam.map((data, i)=>{
              return (
                <Col style={{display:'flex', alignItems: 'center'}}>
                  <img src={data.imgPath} style={{width:'40px', height:'40px', cursor:'pointer'}} onClick={()=>{
                    navigate('/TeamInfo/'+data.id);
                  }}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className="header-menubar">
        <ul style={{listStyleType: "none", display:'flex',flexDirection:'row' , justifyContent:'space-around', color:'white', padding:'10px 0', margin:"0"}}>
          <li>뉴스</li>
          <li>영상</li>
          <Link to='/TeamInfo' style={{textDecoration:'none', color:'white'}}><li>팀 소개</li></Link> 
          <li>이벤트</li>
          <li>About K League</li>
          <li>검색</li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={
          <div>
            <Carousel style={{width:'100%', height:'400px'}}>
            <Carousel.Item>
              <div className='eventBanner1'></div>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Third slide label</h3>
              <p>Praesen cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Item>
          </Carousel>
          <div className='mid-site'>
            <div className='aside-left'>
              <div className='rankTextbar'>
                <div className='ballImage'/>
                <p>팀 순위</p>
              </div>
            </div>
            <div className='aside-right'>
              <div className='newsTextbar'>
                <div className='ballImage'/>
                <p>뉴스</p>
              </div>
            </div>
          </div>
          </div>  
        }/>
        <Route path='/TeamInfo' element={
          <div className='infoText'>
            <h3>팀 소개 페이지입니다.</h3>
            <Container>
              <Row sm={1} md={4}>
              {showTeam.map((data, i)=>{
              return (
                <TeamInfo showTeam={showTeam} team={data} i={i}/>
              )
            })}
              </Row>
            </Container>
            </div>
        }/>
        <Route path='/TeamInfo/teamUlsan' element={
          <div>
            <h1>asdsad</h1>
          </div>
        }/>
        <Route path='/TeamInfo/teamJeju' element={
          <div>
            456
          </div>
        }/>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}


export default App;
