import {Tab, Tabs} from 'react-bootstrap';

function NewsPageAll() {
    return (
        <div>
            <div className='body-Area'>
            <Tabs
                defaultActiveKey="home"
                id="fill-tab-example"
                // className="mb-3"
                justify
                style={{border:'50px solid rgb(241, 235, 235)',margin:'0'}}
                >
                <Tab eventKey="home" title="전체">
                    <div className='body-table'>
                        <table className='tableArea'>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>등록일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>6</td>
                                    <td><span className='txt'>NOTICE</span> 팬과 함께하는 'K리그1 파이널라운드 미디어데이' 28일 개최</td>
                                    <td>2022.09.27</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><span className='txt'>CLUB</span> [광주] '챔피언 광주FC, K리그2 새 역사 향한다</td>
                                    <td>2022.09.25</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><span className='txt'>NOTICE</span> 하나원큐 K리그2 2022 41라운드 프리뷰</td>
                                    <td>2022.09.23</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><span className='txt'>LEAGUE</span> K리그 기술 분석을 담은 월간 테크니컬 리포트'월간 TSG'창간</td>
                                    <td>2022.09.21</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><span className='txt'>LEAGUE</span> ‘멀티 골‘ 김영빈(강원), K리그1 33라운드 MVP</td>
                                    <td>2022.09.21</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><span className='txt'>CLUB</span> [울산] 울산현대, 호랑이굴에서 수원FC 누르고 웃으며 윗물로 간다!</td>
                                    <td>2022.09.16</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>
                <Tab eventKey="club" title="구단" >
                <div className='body-table'>
                        <table className='tableArea'>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>등록일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td><span className='txt'>CLUB</span> [광주] '챔피언 광주FC, K리그2 새 역사 향한다</td>
                                    <td>2022.09.25</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><span className='txt'>CLUB</span> [울산] 울산현대, 호랑이굴에서 수원FC 누르고 웃으며 윗물로 간다!</td>
                                    <td>2022.09.16</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>
                <Tab eventKey="notice" title="공지" >
                <div className='body-table'>
                        <table className='tableArea'>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>등록일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td><span className='txt'>NOTICE</span> 팬과 함께하는 'K리그1 파이널라운드 미디어데이' 28일 개최</td>
                                    <td>2022.09.27</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><span className='txt'>NOTICE</span> 하나원큐 K리그2 2022 41라운드 프리뷰</td>
                                    <td>2022.09.23</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>
                <Tab eventKey="league" title="리그" >
                <div className='body-table'>
                        <table className='tableArea'>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>등록일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td><span className='txt'>LEAGUE</span> K리그 기술 분석을 담은 월간 테크니컬 리포트'월간 TSG'창간</td>
                                    <td>2022.09.21</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><span className='txt'>LEAGUE</span> ‘멀티 골‘ 김영빈(강원), K리그1 33라운드 MVP</td>
                                    <td>2022.09.21</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>
            </Tabs>
            </div>
        </div>
    )
}
export default NewsPageAll;
    