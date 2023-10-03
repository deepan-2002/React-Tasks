import Card from 'react-bootstrap/Card';
import './Congrats.css';

function Congrats() {
  return (
    <main className='congrats'>
      <h1>Congratulations</h1>
      <Card style={{ width: '400px', backgroundColor: '#cffafe' }} className='text-center'>
        <Card.Body>
          <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'></img>
          <Card.Text>
            <h1>Kiran V</h1>
            <p>Vishnu Institute of Computer Education and Technology.<br></br>
              Bhimavaram
            </p>
          </Card.Text>
          <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'></img>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Congrats;