import ScrollAnimation from "react-animate-on-scroll"
import { BrowserRouter } from "react-router-dom"
import CurriculumEN from '../../assets/CV-2022-EN.pdf'
import Illustration from "../../assets/illustration.svg"
import linkedinIcon from "../../assets/linkedin.png"
import { Container } from "./styles"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hey there 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Gabriel Babeux</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="job-title">
            <h3 style={{ marginRight: "10px" }}>Full Stack Developer</h3>
            <a
              href="https://www.linkedin.com/in/gabriel-babeux/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-btn"
            >
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
          </div>

        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <a href={CurriculumEN} download className="button">
              Download my CV
            </a>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}