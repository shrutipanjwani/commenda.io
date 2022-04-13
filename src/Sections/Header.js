import React from "react";
import styled from "styled-components";
import { Button } from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = styled.section`
  height: 700px;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  margin: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroContentInside = styled.div`
  margin: 10px;
  width: 100%;
`;

const HeroContent = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr;
  grid-template-rows: 1fr 0.5fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${HeroContentInside}:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;

    h1 {
      font-size: 50px;
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
      height: 30px;
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
  ${HeroContentInside}:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  ${HeroContentInside}:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

const HeroImageBg = styled.div`
  margin-right: 5%;
  width: 60%;
  height: 50%;
  border-radius: 50% 22% 40% 80%;
  filter: blur(100px);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(114, 100, 182, 5),
    rgba(114, 100, 182, 0)
  );
`;

const HeroImage = styled.img``;

function Header() {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroContent>
          <HeroContentInside>
            <h1>
              The platform for <br />
              <span>international</span> fundraising
            </h1>
          </HeroContentInside>
          <HeroContentInside>
            <p>
              You need money to build your company. But once you've convinced an
              investor to believe in your vision, you still have to make sure
              your company is set up to take their investment.
            </p>
          </HeroContentInside>

          <HeroContentInside>
            <Button to="/signin" primary="true">
              Get Started&nbsp; &nbsp;
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </Button>
          </HeroContentInside>
        </HeroContent>
        <HeroImageBg>
          <HeroImage />
        </HeroImageBg>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Header;
