import './App.css';
import {Carousel, Container, Row, Col, Dropdown, Table} from 'react-bootstrap';
import ulsanImg from './images/Ulsan_Hyundai_FC.svg.png';
import jejuImg from "./images/Jeju_United_FC.svg.png";
import k_logoMini from "./images/456.PNG";
import suwonImg from './images/emblem_K29.png';
import evenBanner1 from './images/디자인_배너.PNG';
import evenBanner2 from './images/KakaoTalk_20220901_160223206_01_20220902_023758.png';
import evenBanner3 from './images/KakaoTalk_20220316_113356537_20220316_050246.png';
import { useState, useEffect } from "react";
import {useNavigate, Routes, Route, Link, Outlet} from 'react-router-dom';
import searchIcon from './images/3844432_magnifier_search_zoom_icon.png';
import arrowIcon from './images/free-icon-right-arrow-5166492.png';
import wideNewsPic from './images/뉴스(큰화면).PNG';
import RankTable from './Components/RankTable.js';
import UlsanPage from './IntroPage/UlsanPage.js';
import k_logo from "./images/123.JPG";
import EventPage from "./EventPage/EventPage.js";
import CreateText from './EventPage/CreateText';




function App() {
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
    },
    {
      id:"teamSuwon",
      teamName:'수원',
      imgPath:suwonImg
    }

  ])
  let [showEvenBanner, setShowEvenBanner] = useState([
    {
      bannerId:'even001',
      bannerUrl: '/EventPage',
      bannerImgPath: evenBanner1
    },
    {
      bannerId:'even002',
      bannerUrl: '/EventPage/Even2',
      bannerImgPath: evenBanner2
    },
    {
      bannerId:'even003',
      bannerUrl: '/Eventpage/Even3',
      bannerImgPath: evenBanner3
    }
  ]);
  let navigate = useNavigate();
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 75) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  
  return (
    <div className="App">
      <div className='header-minbar'>
        <span>로그인</span>|<span>회원가입</span>
      </div>
      <div className='header-bar'>
        <img src={k_logo} style={{width:'200px', height:'75px', margin:'0 auto', cursor:'pointer'}} onClick={()=>{
          window.location.href = '/';
        }}/> 
        <Container style={{display:'flex', justifyContent:'flex-end'}}>
          <Row xs="auto">
            {showTeam.map((data, i)=>{
              return (
                <Col style={{display:'flex', alignItems: 'center'}}>
                  <img src={data.imgPath} style={{width:'40px', height:'40px', cursor:'pointer'}} onClick={()=>{
                    navigate(data.id);
                  }}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className="header-menubar">
        <ul className={ScrollActive ? "fixed-menu" : "menu"}>
            {ScrollActive ? <img src={k_logoMini} style={{width:'32px', height:'32px', float:'left', cursor:'pointer'}} onClick={()=>{
              window.location.href = '/';
            }}></img> : null}
            <li><a>뉴스</a>
            <ul className='down-menu'>
              <li>1-1</li>
              <li>1-2</li>
              <li>1-1</li>
            </ul>
          </li>
          <li><a>영상</a>
            <ul className='down-menu'>
              <li>2-1</li>
              <li>2-2</li>
            </ul>
          </li>
          <li><a>팀 소개</a>
            <ul className='down-menu'>
              <li>울산 현대</li>
              <li>제주 유나이티드</li>
              <li>수원FC</li>
            </ul>
          </li>
          <li><a style={{cursor:'pointer'}} onClick={()=>{
            window.location.href = '/EventPage';
          }}>이벤트</a>
          <ul className='down-menu'>
              <li>승부 예측</li>
              <li>출석 이벤트</li>
            </ul>
          </li>
          <li style={{width:"18rem"}}>About K League</li>
          <img src={searchIcon} style={{width:'32px', height:'32px', cursor:'pointer', float:'right' ,marginRight:'20px'}}></img>
          </ul>
      </div>
      <Routes>
        <Route path='/' element={
          <div>
            <Carousel style={{width:'100%', height:'400px'}}>
              {showEvenBanner.map((data, i)=> {
                return (
                  <Carousel.Item>
                    <img src={data.bannerImgPath} className='eventBanner' onClick={()=>{
                      window.location.href = data.bannerUrl;
                    }}/>
                  </Carousel.Item>
                )
              })}
            </Carousel>
            <div className='mid-site'>
              <div className='aside-left'>
                <div className='rankTextbar'>
                  <div className='ballImage'/>
                  <p>팀 순위</p>
                </div>
                <RankTable showTeam={showTeam}/>
              </div>
              <div className='aside-right'>
                <div className='newsTextbar'>
                  <div className='ballImage'/>
                  <p>뉴스</p>
                </div>
                <div className='wide-newsArea'>
                  <img src={wideNewsPic} style={{width:'55%', height:'100%'}}></img>
                  <div style={{width:'45%', display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                    <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>CLUB</p>
                    <strong style={{fontSize:'30px', color:'white'}}>[광주] '챔피언' 광주FC, K리그2 새 역사 향한다</strong>
                    <div style={{display:'flex'}}>
                      <p style={{marginTop:'40px', color:'white'}}>[광주] '챔피언' 광주FC, K리그2 새 역사 향한다</p>
                      <span><img src={arrowIcon} style={{float:'right', marginTop:'25px'}}></img></span>
                    </div>
                  </div>
                </div>
                <div className='list-newsArea'>
                  <div className='newsbox'></div>
                  <div className='newsbox'></div>
                  <div className='newsbox'></div>
                </div>
              
              </div>
            </div>
          </div>  
        }/>
        <Route path='/EventPage' element={
          <EventPage evenBanner1={evenBanner1}/>
        }/>
        <Route path='/EventPage/CreateText' element={
            <CreateText/>
        }/>
        <Route path='/teamUlsan' element={
          <UlsanPage/>
        }/>
        <Route path='/teamJeju' element={
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


