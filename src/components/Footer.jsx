import './Footer.css'
import { Container } from 'reactstrap';


export function Footer() {
    return (
      <>
        <Container id="bm">
          <ul id="bottommenu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#faith">Faith</a>
            </li>
            <li>
              <a href="#fitness">Fitness</a>
            </li>
            <li>
              <a href="#finances">Finances</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <h4 id="terms"> Terms & Condition</h4>{" "}
          <h4 id="copy"> ©Faith & Fitness LLC 2021</h4>
        </Container>
      </>
    );
}