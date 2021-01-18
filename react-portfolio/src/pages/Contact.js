import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

// function Contact() {
//     <Container>
//         <Row>
//             <Col>
//                 <h1>Contact</h1>
//             </Col>
//         </Row>
//         <Row>
//             <Col>
//                 <p>Email</p>
//                 <p>Github</p>
//                 <p>Linkedin</p>
//             </Col>
//         </Row>
//     </Container>
// }

// export default Contact;

function Contact() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h3 style={{fontSize: 40}}>Contact Me</h3>
                    </Col>
                </Row>
           
                    <Row>
                        <Col size="md-12">

\

                            <p style={{fontSize: 20}}>LinkedIn: <a href="https://www.linkedin.com/in/bryanlilburn/" rel="noreferrer" target="_blank" type="btn">
                                Link to my profile<i class="fab fa-linkedin-in"></i>
                            </a>
                            </p>

                            <p style={{fontSize: 20}}>GitHub: <a href="https://github.com/blilburn" rel="noreferrer" target="_blank" type="btn">
                                Link to my page<i class="fab fa-github"></i>
                            </a>
                            </p>
                            <p style={{fontSize: 20}}>Email: <a href="" rel="noreferrer" target="_blank" type="btn">My email</a>
                            </p>
                        </Col>
                    </Row>
      
            </Container>
        </div>


    )
}

export default Contact