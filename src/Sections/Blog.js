import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  max-height: 1100px;
  width: 100%;
  max-width: 1200px;
  margin: 10% auto;
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
`;

const Blog = () => {
  return (
    <Section id="blog">
      <Wrapper>Blog</Wrapper>
    </Section>
  );
};

export default Blog;
