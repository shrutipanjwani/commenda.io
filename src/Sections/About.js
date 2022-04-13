import React from "react";
import styled from "styled-components";
// import { Button } from "../Components/Button";

const AboutSection = styled.section`
  height: 700px;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const AboutWrapper = styled.div`
  margin: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutWrapper>About</AboutWrapper>
    </AboutSection>
  );
};

export default About;
