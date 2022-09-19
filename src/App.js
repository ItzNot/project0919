import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className="App">
      <div className='header-minbar'>
        <span>로그인</span>|<span>회원가입</span>
      </div>
      <div className='header-bar'>
        <div style={{width:'200px', height:'75px', backgroundColor:'gray'}}>사진부분</div>
        <div className='team-logo'>
          <div style={{width:'75px', height:'75px'}}>사진1</div>
          <div style={{width:'75px', height:'75px'}}>사진2</div>
        </div>
      </div>
      <div className="header-menubar">
        <ul style={{listStyleType: "none", display:'flex', justifyContent: 'space-around', margin:'0 auto'}}>
          <li>뉴스</li>
          <li>영상</li>
          <li>일정/결과/티켓</li>
          <li>이벤트</li>
          <li>About K League</li>
        </ul>
      </div>
      <Carousel style={{width:'100%', height:'400px', backgroundColor:'gray'}}>
        <Carousel.Item>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
