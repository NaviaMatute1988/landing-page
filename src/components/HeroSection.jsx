import './HeroSection.css'
import { Container, Row , Col} from 'reactstrap';

export function HeroSection() {
    return (
      <>
        <Container>
          <Row>
            <Col sm="5" me="7">
              <img src="https://images.unsplash.com/photo-1602677416425-c84311bd217c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="faithpic"></img>
              <h1>
                {" "}
                Finding and accepting Christ as my Lord as savior is the best
                thing that ever happened to me. I am excited to share my journey
                with you. I hope that this may bring you closer to him.
              </h1>
              <img src="https://images.unsplash.com/photo-1604603565810-9f2a167d6b6e?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxmaXRuZXNzfGVufDB8fDB8fHww"></img>
              <h1>
                {" "}
                I have gone through a health scare back in 2019 and started
                reasearching about nutrition and fitness. Our bodies are a
                temple and we should watch what we eat and do with our bodies.
              </h1>
              <img src="https://images.unsplash.com/photo-1511172459139-dc635d3274cd?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJsb25kJTIwdHJhdmVsaW5nfGVufDB8fDB8fHww"></img>
              <h1>
                {" "}
                In 2019 I started my online business and was able to pay off my
                debet in 5 months. I want to teach other women the same methods
                I used so they can achieve Financial Freedom as well!
              </h1>
            </Col>
          </Row>
        </Container>
      </>
    );
}