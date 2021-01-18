import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

function Hero() {
    return (
     
    <CardColumns>
        <Card.Body>
 
        <Card.Title> <a href="https://aroseca15.github.io/Disaster-Ready/" rel="noreferrer" target="_blank">Disaster Preparedness</a></Card.Title>
        <Card.Text>An application for natural disaster preparation.</Card.Text>
        <Card.Img className="app-image" src="./frontpage.jpg" />
        </Card.Body>
        <Card.Body>
        <Card.Title> <a href="https://immense-meadow-08366.herokuapp.com/" rel="noreferrer" target="_blank">Burger Page</a></Card.Title>
        <Card.Text>An application for creating burgers.</Card.Text>
        <Card.Img className="app-image" src="./burger.jpg" />
        </Card.Body>
        <Card.Body>
        <Card.Title> <a href="https://proj2-dionysus.herokuapp.com/" rel="noreferrer" target="_blank">RSVPlanner</a></Card.Title>
        <Card.Text>An application for discussing events.</Card.Text>
        <Card.Img className="app-image" src="./rsvp.jpg" />
        </Card.Body>
        <Card.Body>
        <Card.Title> <a href="https://github.com/blilburn/employee-directory" rel="noreferrer" target="_blank">Employee Directory</a></Card.Title>
        <Card.Text>An application for employee information.</Card.Text>
        <Card.Img className="app-image" src="./emp.jpg" />
        </Card.Body>
        <Card.Body>
        <Card.Title> <a href="https://powerful-dusk-84299.herokuapp.com/" rel="noreferrer" target="_blank">Workout Tracker</a></Card.Title>
        <Card.Text>An application for tracking workouts.</Card.Text>
        <Card.Img className="app-image" src="./cardiowo.jpg" />
        </Card.Body>
        <Card.Body>
        <Card.Title> <a href="https://desolate-shore-31338.herokuapp.com/" rel="noreferrer" target="_blank">Note Taker</a></Card.Title>
        <Card.Text>An application for taking notes.</Card.Text>
        <Card.Img className="app-image" src="./note.jpg" />
        </Card.Body>

    </CardColumns>
    
    );
}

export default Hero;