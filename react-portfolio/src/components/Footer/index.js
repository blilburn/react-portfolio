import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./style.css";

function Footer() {
    return (
        <Container fluid>
            <footer className="media-link" style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>
            <Row>
                <Col>
                 <a href="https://www.linkedin.com/in/bryanlilburn/" rel="noreferrer" target="_blank" type="btn">
                                LinkedIn <i class="fab fa-linkedin-in"></i>
                            </a>
                        

                            <a href="https://github.com/blilburn" rel="noreferrer" target="_blank" type="btn">
                                Github<i class="fab fa-github"></i>
                            </a>
                            
                </Col>
            </Row>
            </footer>
        </Container>
    )
}

export default Footer;