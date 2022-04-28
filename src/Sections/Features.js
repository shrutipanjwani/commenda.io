import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SectionBg = styled.div`
  position: absolute;
  top: 90%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(114, 100, 182, 0),
    rgba(114, 100, 182, 0.5),
    rgba(114, 100, 182, 0)
  );
  clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%);

  @media screen and (max-width: 990px) {
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  }

  @media screen and (max-width: 600px) {
    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  }
`;

const Wrapper = styled.div`
  max-height: 1100px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentInside = styled.div`
  margin: 10px;
  width: 90%;

  ul {
    list-style: square;
    margin-left: 20px;
  }

  ul li {
    margin-bottom: 20px;
  }

  li span {
    color: #7264b6;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    width: 150%;
  }
`;

const Content = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 0.6fr;
  grid-template-rows: 0.4fr 0.6fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${ContentInside}:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;

    h1 {
      font-size: 34px;
      width: 650px;
      position: relative;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      @media screen and (max-width: 500px) {
        font-size: 30px;
      }
    }
    h1 span {
      position: relative;
    }
    h1 span::before {
      content: "";
      position: absolute;
      width: 100%;
      z-index: -1;
      height: 18px;
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
`;

// const ImageBg = styled.div`
//   margin-right: 5%;
//   width: 40%;
//   height: 50%;
//   border-radius: 50% 22% 40% 80%;
//   filter: blur(100px);
//   background: radial-gradient(
//     circle at 50% 50%,
//     rgba(114, 100, 182, 0.5),
//     rgba(114, 100, 182, 0)
//   );
//   position: absolute;
//   right: 0;
//   z-index: -1;
// `;

const Box = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(
    rgba(114, 100, 182, 0.7),
    rgba(114, 100, 182, 0.4)
  );
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: 500px) {
    width: 120px;
    height: 120px;
  }
`;

const Boxes = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 0.4fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${Box}:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  ${Box}:nth-child(2) {
    grid-area: 2 / 2 / 3 / 3;
    margin-top: -80px;
  }

  ${Box}:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
    margin-top: -120px;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    margin-left: 2rem;

    ${Box}:nth-child(2) {
      margin-top: -50px;
      margin-left: 10px;
    }

    ${Box}:nth-child(3) {
      margin-top: -90px;
    }
  }
`;

const ContentInsideTwo = styled.div`
  margin: 10px;
  width: 100%;

  p {
    text-align: center;
  }
  p span {
    color: #7264b6;
    font-weight: bold;
  }
`;

const ContentTwo = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 0.6fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${ContentInsideTwo}:nth-child(1) {
    h1 {
      font-size: 34px;
      text-align: center;
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
      height: 18px;
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

  @media screen and (max-width: 1024px) {
    width: 90%;

    ${ContentInsideTwo}:nth-child(1) {
      h1 {
        font-size: 30px;
      }
    }
  }
`;

const Features = () => {
  return (
    <>
      <Section id="features">
        <Wrapper>
          <Content>
            <ContentInside>
              <h1>
                <span>3 things</span> we do
              </h1>
            </ContentInside>
            <ContentInside>
              <ul>
                <li>Keep your cap table and accounting in good shape</li>
                <li>Help you stay up to date with paperwork and compliance</li>
                <li>
                  Give you best in class guidance on how to structure your
                  company
                </li>
              </ul>
            </ContentInside>
          </Content>
          {/* <ImageBg /> */}
          <Boxes>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Boxes>
        </Wrapper>
        <ContentTwo>
          <ContentInsideTwo>
            <h1>
              How does it <span>helps</span>?
            </h1>
          </ContentInsideTwo>
          <ContentInsideTwo>
            <p>
              We can help you set up or integrate with your existing cap table
              management system and ensure your cap table is in top shape for
              <span> foreign investment within 24 hours</span>. All you have to
              do is provide us with the proper documentation and we will set
              everything else up.
            </p>
          </ContentInsideTwo>
        </ContentTwo>
        <SectionBg />
      </Section>
    </>
  );
};

export default Features;
