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
        <div className='k-logo'></div>
        <div className='team-logo'>
          <div className='ulsan'></div>
          <div className='jeju'></div>
        </div>
      </div>
      <div className="header-menubar">
        <ul style={{listStyleType: "none", display:'flex',flexDirection:'row' , justifyContent:'space-around', color:'white', padding:'10px 0', margin:"0"}}>
          <li>뉴스</li>
          <li>영상</li>
          <li>일정/결과/티켓</li>
          <li>이벤트</li>
          <li>About K League</li>
          <li>검색</li>
        </ul>
      </div>
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
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Item>
      </Carousel>
      <div className='mid-site'>
        <div className='aside-left'>
          <div className='rankTextbar'>
            <div className='ballImage'/>
            <p>팀 순위</p>
          </div>
          <div className='rankImage'>

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
  );
}


export default App;
