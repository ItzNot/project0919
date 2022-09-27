import './NewsPage.css';
import {Tab, Tabs} from 'react-bootstrap';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
function NewsPage({newsItems}) {
    let navigate = useNavigate();
    console.log(newsItems);
    return(
        <div>
            <div className='bannner-PicBox'>
                <h3>뉴스</h3>
                <p>K리그1・2의 최신 소식을 모두 확인 할 수 있는 공간입니다.</p>
            </div>
            <Outlet/>
            
    </div>
    )
}

export default NewsPage;