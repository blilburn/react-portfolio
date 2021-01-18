import Container from "../components/Container";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import Hero from "../components/Hero/index";
function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <Hero></Hero>
                        <div>
                <img className='mx-auto mb-4 sm:mb-0 flex-shrink' src="\forprofile5.jpg" alt="Bryan Lilburn"/>
                </div>
                    </Col>
                    <Col size="md-12">
                        <h1>I'm Bryan Lilburn</h1>
                        <p> Web Developer and Programmer</p>
        
                        <table class="table table-responsive">
                    <tr>
                        <td>Linked In</td>
                        <td>:</td>
                        <td><a href="https://www.linkedin.com/in/bryanlilburn/" rel="noreferrer" target="_blank" type="btn">
                                Bryan Lilburn <i class="fab fa-linkedin-in"></i>
                            </a></td>
                   </tr>
                    <tr>
                        <td>Github</td>
                        <td>:</td>
                        <td><a href="https://github.com/blilburn" rel="noreferrer" target="_blank" type="btn">
                                blilburn<i class="fab fa-github"></i>
                            </a></td> 
                    </tr>
                </table>
                        <p>                I currently work in the health care industry and am improving my skills in web development and
                programming. I have always been fascinated with web development as it allows me to focus on creative
                problem-solving. Each project is a new challenge that provides an opportunity to learn and innovate. I
                am currently working on a few web development projects so please return so that you can see my future
                projects.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;