import React from "react";
import styled from "styled-components";

const FeaturesSection = styled.section`
  height: 700px;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const FeaturesWrapper = styled.div`
  margin: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesWrapper>Features</FeaturesWrapper>
    </FeaturesSection>
  );
};

export default Features;
