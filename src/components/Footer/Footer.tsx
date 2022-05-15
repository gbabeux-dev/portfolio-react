import linkedinIcon from '../../assets/linkedin.png'
import reactIcon from '../../assets/react-icon.svg'
import { Container } from './styles'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>G</span>
        <span>Babeux</span>
      </a>
      <div>
        <p>
          This website template is a fork of <a href="https://github.com/joaotuliojt" target="_blank" style={{ color: `var(--main)` }}> João Túlio</a>'s project
          <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/gabriel-babeux/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </Container>
  )
}
