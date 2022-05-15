import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import WorkTabs from "./WorkTabs";

const Container = styled.section`
  margin-top: 15rem;

  @media (min-width: 1400px){
    max-width: 60vw;
    margin: 0 auto;
  }

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;

    @media (min-width: 1400px){
      margin-top: 10rem;
    }
  }
`
export function Experience() {
  return (
    <Container id="experience">
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h2>Where I've Worked</h2>
      </ScrollAnimation>
      <WorkTabs />
    </Container>
  );
}