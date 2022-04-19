import React from "react";
import styled from "styled-components";
import { Button } from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SectionBg = styled.div`
  position: absolute;
  top: -10%;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(0px);
  background: linear-gradient(
    rgba(114, 100, 182, 0),
    rgba(114, 100, 182, 0.4),
    rgba(114, 100, 182, 0)
  );
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  margin: 0 auto;
  padding: 50px;
  max-height: 1100px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ContentInside = styled.div`
  margin: 10px;
  width: 100%;

  p span {
    color: var(--main-color);
    font-weight: bold;
  }
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.8fr;
  grid-template-rows: 0.5fr 0.5fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${ContentInside}:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;

    h1 {
      font-size: 34px;
      width: 650px;
      position: relative;
    }
    h1 span {
      position: relative;
    }
    h1 span::before {
      content: "";
      position: absolute;
      width: 100%;
      z-index: -1;
      height: 16px;
      bottom: 5px;
      background-image: linear-gradient(
        to right top,
        #7264b6,
        #9589c9,
        #b7afdc,
        #dbd7ee,
        #ffffff
      );
    }
  }
  ${ContentInside}:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    margin-bottom: 30px;
  }
  ${ContentInside}:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

const ImageBg = styled.div`
  margin-right: 5%;
  width: 40%;
`;

const Image = styled.img``;

const About = () => {
  return (
    <Section id="about">
      <SectionBg />
      <Wrapper>
        <ImageBg>
          <Image />
        </ImageBg>

        <Content>
          <ContentInside>
            <h1>
              Raise from <span>anywhere</span> in the world
            </h1>
          </ContentInside>
          <ContentInside>
            <p>
              We make fundraising simple by offering{" "}
              <span>an all-in-one platform</span> for your company to flip your
              cap table, comply with global regulations and best practices, and
              access capital from anywhere in the world.
            </p>
            <p>
              We help you take investment in <span>days instead of months</span>
              . Completely free until the money hits your company’s bank
              account!
            </p>
          </ContentInside>

          <ContentInside>
            <Button to="/signin" primary="true">
              Start Raising&nbsp; &nbsp;
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </Button>
          </ContentInside>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default About;
