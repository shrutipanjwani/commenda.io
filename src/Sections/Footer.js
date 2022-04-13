import React from "react";
import styled from "styled-components";

const FooterSection = styled.section`
  height: 700px;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const FooterWrapper = styled.div`
  margin: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>Footer</FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
