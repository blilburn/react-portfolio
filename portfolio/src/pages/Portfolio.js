import Row from "../components/Row";
import Col from "../components/Col";
const { default: Container } = require("../components/Container");


function Portfolio() {
    <div>
        <Container>
            <Row>
                <Col>
                    <h1>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Projects</p>
                </Col>
            </Row>
        </Container>
    </div>
}
export default Portfolio;