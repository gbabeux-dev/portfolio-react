import linkedinIcon from '../../assets/linkedin.png'
import { Container } from './styles'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>G</span>
        <span>Babeux</span>
      </a>

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
