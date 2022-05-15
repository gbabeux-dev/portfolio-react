import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import ProjectTabs from "./ProjectTabs";

const Container = styled.section`
  margin-top: 15rem;

  @media (min-width: 1400px){
    max-width: 60vw;
    margin: 0 auto;
  }

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2rem;

    @media (min-width: 1400px){
      margin-top: 10rem;
    }
  }
`
export function Project() {
  return (
    <Container id="project">
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h2>Projects</h2>
      </ScrollAnimation>
      <ProjectTabs />
    </Container>
  );
}