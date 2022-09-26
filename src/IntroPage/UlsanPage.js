import './UlsanPage.css';
import {Tab, Tabs} from 'react-bootstrap';


function UlsanPage() {
    return (
        <div>
            <div className='bannner-PicBox'>
                <h3>Ulsan Hyundai FC</h3>
                <p>울산 현대 소개 페이지입니다.</p>
            </div>
            <div className='body-main'>
            <Tabs style={{display:'flex', justifyContent:'center', marginTop:'50px'}}
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="home" title="">
                    <p>1번 항목</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>2번 항목</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <p>3번 항목</p>
                </Tab>
            </Tabs>
            </div>
            
        </div>
    )
}

export default UlsanPage;