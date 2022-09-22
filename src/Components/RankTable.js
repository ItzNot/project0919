import {Table} from 'react-bootstrap';
import './RankTable.css';
function RankTable({showTeam}) {
    
    return (
        <div>
            <div className='backArea'>
                <table className='RankTable'>
                    <thead className='RankHeadTable'>
                        <tr>
                        <th>순위</th>
                        <th>클럽</th>
                        <th>경기</th>
                        <th>승점</th>
                        <th>득점</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={showTeam[0].imgPath}/>
                            </td>
                            <td>33</td>
                            <td>66</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><img src={showTeam[1].imgPath}/></td>
                            <td>33</td>
                            <td>46</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><img src={showTeam[2].imgPath}/></td>
                            <td>33</td>
                            <td>44</td>
                            <td>51</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default RankTable;