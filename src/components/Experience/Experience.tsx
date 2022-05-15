import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import WorkTabs from "./WorkTabs";
import * as React from 'react';

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

  .details-button{
    padding: 1.4rem 6rem;
  }

  .details-container{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
`
export function Experience() {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <Container id="experience">
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h2>Where I've Worked</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
        <div className="details-container">
          <button onClick={() => setShowDetails(!showDetails)} className="details-button">Show {showDetails ? "less" : "more"} details</button>
        </div>
      </ScrollAnimation>
      <WorkTabs showDetails={showDetails} />
    </Container>
  );
}