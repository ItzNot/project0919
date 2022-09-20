import {useNavigate} from 'react-router-dom';
import {Card} from 'react-bootstrap';

function Info({showTeam, team, i}) {
    let navigate = useNavigate();
    return (
        <Card style={{ width: '15rem', margin:'5px auto', marginTop:'50px', cursor:'pointer' }} onClick={()=>{
            navigate(team.id);
        }}>
        <Card.Img variant="top" src={team.imgPath} />
        <Card.Body>
        <Card.Title>{team.teamName}</Card.Title>
        </Card.Body>
    </Card>
    )
}

export default Info;