import React from "react";
import styled from "styled-components";

const BlogSection = styled.section`
  height: 700px;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const BlogWrapper = styled.div`
  margin: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Blog = () => {
  return (
    <BlogSection id="blog">
      <BlogWrapper>Blog</BlogWrapper>
    </BlogSection>
  );
};

export default Blog;
