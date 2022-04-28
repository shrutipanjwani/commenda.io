import React from "react";
import styled from "styled-components";
import blog from "../Assets/blog.jpeg";
import { Button } from "../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  height: 100vh;
  max-height: 1100px;
  width: 100%;
  max-width: 1200px;
  margin: 30% auto 0 auto;
`;

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
  height: 100%;
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
  width: 80%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
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
        width: 90%;
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

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    ${ContentInside}:nth-child(2) {
      width: 90%;
    }
  }
`;

const BlogBox = styled.div`
  padding: 10px;
  margin: 10px;

  h1 {
    font-size: 70px;
    color: #333;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const BlogBoxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Blog = () => {
  return (
    <Section id="blog">
      <Wrapper>
        <Content>
          <ContentInside>
            <h1>
              Checkout our latest
              <br />
              <span>Blog</span> posts
            </h1>
          </ContentInside>
          <ContentInside>
            <p>
              We can help you set up or integrate with your existing cap table
              management system and we will set everything else up.
            </p>
          </ContentInside>
          <ContentInside>
            <Button to="/signin" primary="true">
              Read More&nbsp; &nbsp;
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </Button>
          </ContentInside>
        </Content>
        <BlogBoxes>
          <BlogBox>
            <h1>01</h1>
            <small>2022-04-28</small>
            <p>How to raise funds in a startup. Steps to do so</p>
            <img src={blog} alt="Blog" width="100%" />
          </BlogBox>
          <BlogBox>
            <h1>02</h1>
            <small>2022-04-29</small>
            <p>How to raise funds in a startup. Steps to do so</p>
            <img src={blog} alt="Blog" width="100%" />
          </BlogBox>
        </BlogBoxes>
      </Wrapper>
    </Section>
  );
};

export default Blog;
