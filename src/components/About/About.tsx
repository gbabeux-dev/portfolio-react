import ScrollAnimation from "react-animate-on-scroll";
import cSharpIcon from "../../assets/csharp-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import javaIcon from "../../assets/java-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mongoIcon from "../../assets/mongo-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import phpIcon from "../../assets/php-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import { Container } from "./styles";



export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <div style={{ backdropFilter: `blur(6px)` }}>
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About me</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
            <p>I am a student in software engineering at ETS (École de technologie supérieure) and a beer enthusiast ! I love craft beer and yes, I even brew my own 🍺. </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <p>I am passionate about programming, solving problems and overcoming new challenges. I love to learn every day and really enjoy teamwork!</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
            <p>I have acquired some great experience throughout the startups companies that I have worked for, both on the frontend and the backend side of things. </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
            <h3>Here's some of the technologies I have been working with:</h3>
          </ScrollAnimation>

          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <img src={typescriptIcon} alt="Typescript" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                <img src={htmlIcon} alt="Html" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                <img src={cssIcon} alt="Css" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                <img src={nodeIcon} alt="Node" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                <img src={phpIcon} alt="PHP" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
                <img src={javaIcon} alt="Java" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
                <img src={pythonIcon} alt="Python" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
                <img src={cSharpIcon} alt="C#" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.1 * 1000}>
                <img src={dockerIcon} alt="Docker" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
                <img src={mongoIcon} alt="MongoDB" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img style={{ maxWidth: 500 }} src="https://i.imgur.com/SVSD6Fg.png" alt="Profile image" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
