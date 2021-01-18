import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Hero from "../components/Hero"

function Portfolio() {
    return(
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                    <h1>Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <Hero></Hero>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}



    export default Portfolio;