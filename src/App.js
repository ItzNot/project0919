import './App.css';
import {Carousel, Container, Row, Col, Dropdown} from 'react-bootstrap';
import ulsanImg from './images/Ulsan_Hyundai_FC.svg.png';
import jejuImg from "./images/Jeju_United_FC.svg.png";
import klogo from "./images/AKR20201105144800007_01_i_P4.jpg";
import { useState, useEffect } from "react";
import {useNavigate, Routes, Route, Link} from 'react-router-dom';
import searchIcon from './images/3844432_magnifier_search_zoom_icon.png';

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
        <Link to='/'><div className='k-logo'/></Link> 
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
            {ScrollActive ? <img src={klogo} style={{width:'32px', height:'32px', float:'left', cursor:'pointer'}} onClick={()=>{
              navigate('/');
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
              <li>3-1</li>
              <li>3-2</li>
              <li>3-3</li>
              <li>3-4</li>
            </ul>
          </li>
          <li><a>이벤트</a>
          <ul className='down-menu'>
              <li>4-1</li>
              <li>4-2</li>
              <li>4-3</li>
              <li>4-4</li>
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
                <Container>
                  <Row style={{width:'100%', height:'300px', backgroundColor:'black', margin:'5px'}}>
                    <Col>
                    1 of 2
                    </Col>
                  </Row>
                <Row style={{width:'100%', height:'80px', backgroundColor:'blue', margin:'5px'}}>
                  <Col style={{marginRight:'5px'}}>1 of 3</Col>
                  <Col style={{marginRight:'5px'}}>2 of 3</Col>
                  <Col style={{marginRight:'5px'}}>3 of 3</Col>
                </Row>
                </Container>
              </div>
            </div>
          </div>  
        }/>
        
        <Route path='/teamUlsan' element={
          <div style={{height:'3000px', width:'100%'}}>
            <h1>asdsad</h1>
          </div>
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


