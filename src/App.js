import './App.css';
import {Carousel, Container, Row, Col, Tabs, Tab, Overlay, Tooltip} from 'react-bootstrap';
import ulsanImg from './images/Ulsan_Hyundai_FC.svg.png';
import jejuImg from "./images/Jeju_United_FC.svg.png";
import k_logoMini from "./images/456.PNG";
import suwonImg from './images/emblem_K29.png';
import evenBanner1 from './images/디자인_배너.PNG';
import evenBanner2 from './images/배너사진2.PNG';
import evenBanner3 from './images/KakaoTalk_20220316_113356537_20220316_050246.png';
import {useRef, useState, useEffect } from "react";
import {useNavigate, Routes, Route, Link, Outlet} from 'react-router-dom';
import searchIcon from './images/3844432_magnifier_search_zoom_icon.png';
import arrowIcon from './images/free-icon-left-arrow-137518.png';
import wideNewsPic1 from './images/뉴스(큰화면).PNG';
import wideNewsPic2 from './images/뉴스1.PNG';
import wideNewsPic3 from './images/뉴스2.PNG';
import RankTable from './Components/RankTable.js';
import UlsanPage from './IntroPage/UlsanPage.js';
import k_logo from "./images/123.JPG";
import EventPage from "./EventPage/EventPage.js";
import CreateText from './EventPage/CreateText';
import NewsPage from './NewsPage/NewsPage.js';
import NewsPageAll from './NewsPage/NewsPageAll.js';
import NewsPageClub from './NewsPage/NewsPageClub.js';
import NewsPageNotice from './NewsPage/NewsPageNotice.js';
import NewsPageLeague from './NewsPage/NewsPageLeague.js';
import VideoPage from './VideoPage/VideoPage.js';
import Video001 from './VideoPage/Video001.js';
import Video002 from './VideoPage/Video002.js';
import SignUp from './registIdPw/SignUp.js';
import Signin from './registIdPw/Signin.js'


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
      bannerUrl: '/',
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
  const [show, setShow] = useState(false);
  const target = useRef(null);
  let [showHeaderBar, setShowHeaderBar] = useState(false);
  let isData = localStorage.getItem('boolData');
  useEffect(()=>{
    if(showHeaderBar !== true) {
      setShowHeaderBar(isData);
    }
    
    console.log('시작');
  }, [isData])

  return (
    <div className="App">
      <div className='header-minbar'>
        {showHeaderBar === isData?
        <div>
        <span style={{cursor:'pointer'}} onClick={()=>{
        localStorage.setItem('boolData', false);
        setShowHeaderBar(false);
        }}>로그아웃</span>|<span style={{cursor:'pointer'}}>마이페이지</span>
      </div>
        :
        <div>
          <span style={{cursor:'pointer'}} onClick={()=>{
          navigate('/signin');
        }}>로그인</span>|<span style={{cursor:'pointer'}} onClick={()=>{
          navigate('/signUp');
        }}>회원가입</span>
        </div>
        }
        
      </div>
      <div className='header-bar'>
        <img src={k_logo} style={{width:'200px', height:'75px', margin:'0 auto', cursor:'pointer'}} onClick={()=>{
          navigate('/');
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
            <li><a style={{cursor:'pointer'}} onClick={()=>{
              navigate('/newsPage/all');
            }}>뉴스</a>
            <ul className='down-menu menu1'>
              <li><span onClick={()=>{
                navigate('/newsPage/all');
              }}>전체</span></li>
              <li><span onClick={()=>{
                navigate('/newsPage/club');
              }}>구단</span></li>
              <li><span onClick={()=>{
                navigate('/newsPage/notice');
              }}>공지</span></li>
              <li><span onClick={()=>{
                navigate('/newsPage/league');
              }}>리그</span></li>
            </ul>
          </li>
          <li><a style={{cursor:'pointer'}} onClick={()=>{
            navigate('/videoPage');
          }}>영상</a>
          </li>
          <li><a>팀 소개</a>
            <ul className='down-menu'>
              <li>울산 현대</li>
              <li>제주 유나이티드</li>
              <li>수원FC</li>
            </ul>
          </li>
          <li><a style={{cursor:'pointer'}} onClick={()=>{
            navigate('/EventPage');
          }}>이벤트</a>
          <ul className='down-menu'>
              <li>승부 예측</li>
              <li>출석 이벤트</li>
            </ul>
          </li>
          <li style={{width:"18rem"}}>About K League</li>
          <li style={{float:'right'}}><img src={searchIcon} style={{width:'32px', height:'32px', cursor:'pointer'}} ref={target} onClick={()=>setShow(!show)}></img></li>
          <Overlay target={target.current} show={show} placement="left">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <input type='text' id='searchtextbar'/>
          </Tooltip>
        )}
      </Overlay>
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
                      navigate(data.bannerUrl); 
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
                    <Tabs
                      defaultActiveKey="home"
                      id="uncontrolled-tab-example"
                      className="mb-3"
                      style={{float:'right', marginTop:'90px'}}
                    >
                      <Tab eventKey="home" title="CLUB">
                      <div className='wide-newsArea'>
                        <img src={wideNewsPic1} style={{width:'55%', height:'100%'}}></img>
                        <div style={{width:'45%', display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                          <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>CLUB</p>
                          <strong style={{fontSize:'30px', color:'white', cursor:'pointer'}} onClick={()=>{
                            navigate('/newsPage/club');
                          }}>[광주] '챔피언' 광주FC, K리그2 새 역사 향한다</strong>
                          <div style={{display:'flex'}}>
                            <p style={{marginTop:'40px', color:'white'}}>[광주] '챔피언' 광주FC, K리그2 새 역사 향한다</p>
                          </div>
                        </div>
                      </div>
                      </Tab>
                      <Tab eventKey="profile" title="NOTICE">
                      <div className='wide-newsArea'>
                        <img src={wideNewsPic2} style={{width:'55%', height:'100%'}}></img>
                        <div style={{width:'45%', display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                          <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>NOTICE</p>
                          <strong style={{fontSize:'30px', color:'white', cursor:'pointer'}} onClick={()=>{
                            navigate('/newsPage/notice');
                          }}>하나원큐 K리그2 2022 41라운드 프리뷰</strong>
                          <div style={{display:'flex'}}>
                            <p style={{marginTop:'40px', color:'white'}}>하나원큐 K리그2 2022 41라운드 프리뷰</p>
                          </div>
                        </div>
                      </div>
                      </Tab>
                      <Tab eventKey="contact" title="LEAGUE">
                      <div className='wide-newsArea'>
                        <img src={wideNewsPic3} style={{width:'55%', height:'100%'}}></img>
                        <div style={{width:'45%', display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                          <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>LEAGUE</p>
                          <strong style={{fontSize:'30px', color:'white', cursor:'pointer'}} onClick={()=>{
                            navigate('/newsPage/league');
                          }}>'멀티 골' 김영빈(강원), K리그1 33라운드 MVP</strong>
                          <div style={{display:'flex'}}>
                            <p style={{marginTop:'40px', color:'white'}}>'멀티 골' 김영빈(강원), K리그1 33라운드 MVP</p>
                          </div>
                        </div>
                      </div>
                      </Tab>
                    </Tabs>
                <div className='list-newsArea'>
                  <div className='newsbox'>
                    <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>CLUB</p>
                    <p style={{fontWeight:'bolder', color:'rgb(2, 0, 80)'}}>[광주] '챔피언' 광주FC, K리그2 새 역사 향한다</p>
                  </div>
                  <div className='newsbox'>
                    <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>NOTICE</p>
                    <p style={{fontWeight:'bolder', color:'rgb(2, 0, 80)', backgroundColor:'gray', opacity:'0.6'}}>하나원큐 K리그2 2022 41라운드 프리뷰</p>
                  </div>
                  <div className='newsbox'>
                    <p style={{color:'red', fontSize:'12px', fontWeight:'bold'}}>LEAGUE</p>
                    <p style={{fontWeight:'bolder', color:'rgb(2, 0, 80)'}}>'멀티 골' 김영빈(강원), K리그1 33라운드 MVP</p>
                  </div>
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
        <Route path='/newsPage' element={
          <NewsPage/>
        }>
          <Route path='all' element={
            <NewsPageAll />
          }/>
          <Route path='club' element={
            <NewsPageClub />
          }/>
          <Route path='notice' element={
            <NewsPageNotice />
          }/>
          <Route path='league' element={
            <NewsPageLeague />
          }/>
        </Route>
        <Route path='/videoPage' element={
          <VideoPage/>
        }>
          <Route path='vi001' element={
          <Video001/>
        }/>
          <Route path='vi002' element={
            <Video002 />
          }/>
        </Route>
        <Route path='/signUp' element={
          <SignUp/>
        }/>
        <Route path='/signin' element={
          <Signin showHeaderBar={showHeaderBar}/>
        }/>
        
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}
export default App;


