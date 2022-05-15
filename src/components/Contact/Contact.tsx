import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you want to contact me, don't hesitate to send me a message or a call.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:gabrielbabeux@gmail.com">gabrielbabeux@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="#">(1) 438-392-648</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}