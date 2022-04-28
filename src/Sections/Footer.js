import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SectionBg = styled.div`
  position: absolute;
  bottom: -10%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(rgba(114, 100, 182, 0), rgba(114, 100, 182, 0.6));
`;

const Wrapper = styled.div`
  max-height: 1100px;
  width: 100%;
  height: 300px;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    height: 100%;
  }
`;

const FooterDiv = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  grid-template-rows: 1fr repeat(3, 0.5fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FooterCol = styled.div`
  ul {
    width: 40%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  ul li {
    font-size: 22px;
  }

  p a {
    text-decoration: none;
    transition: 0.2s ease;
  }

  p a:hover {
    color: var(--black-color);
    display: inline-block;
    transform: translateX(3px);
  }

  &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  &:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;

    p {
      width: 80%;
    }
  }
  &:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  &:nth-child(4) {
    grid-area: 4 / 1 / 5 / 2;
  }
  &:nth-child(5) {
    grid-area: 1 / 2 / 2 / 3;
  }
  &:nth-child(6) {
    grid-area: 2 / 2 / 3 / 3;
  }
  &:nth-child(7) {
    grid-area: 3 / 2 / 4 / 3;
  }
  &:nth-child(8) {
    grid-area: 4 / 2 / 5 / 3;
  }
  &:nth-child(9) {
    grid-area: 1 / 3 / 2 / 4;
  }
  &:nth-child(10) {
    grid-area: 2 / 3 / 3 / 4;
  }
  &:nth-child(11) {
    grid-area: 3 / 3 / 4 / 4;
  }
  &:nth-child(12) {
    grid-area: 4 / 3 / 5 / 4;
  }
  &:nth-child(13) {
    grid-area: 1 / 4 / 2 / 5;
  }
  &:nth-child(14) {
    grid-area: 2 / 4 / 3 / 5;
  }
  &:nth-child(15) {
    grid-area: 3 / 4 / 4 / 5;
  }
  &:nth-child(16) {
    grid-area: 4 / 4 / 5 / 5;
  }

  @media screen and (max-width: 700px) {
    &:nth-child(1) {
      grid-area: 1;
    }
    &:nth-child(2) {
      grid-area: 2;
    }

    &:nth-child(3) {
      grid-area: 3;
    }

    &:nth-child(4) {
      grid-area: 4;
    }

    &:nth-child(5) {
      grid-area: 5;
    }
    &:nth-child(6) {
      grid-area: 6;
    }
    &:nth-child(7) {
      grid-area: 7;
    }
    &:nth-child(8) {
      grid-area: 8;
    }
    &:nth-child(9) {
      grid-area: 9;
    }
    &:nth-child(10) {
      grid-area: 10;
    }
    &:nth-child(11) {
      grid-area: 11;
    }
    &:nth-child(12) {
      grid-area: 12;
    }
    &:nth-child(13) {
      grid-area: 13;
    }
    &:nth-child(14) {
      grid-area: 14;
    }
    &:nth-child(15) {
      grid-area: 15;
    }
    &:nth-child(16) {
      grid-area: 16;
    }
  }
`;

const Footer = () => {
  return (
    <Section>
      <SectionBg />
      <Wrapper>
        <FooterDiv>
          <FooterCol>
            <h3>Commenda</h3>
          </FooterCol>
          <FooterCol>
            <p>
              Commenda ensures that your company is set up to quickly take cap
              from all over the world.
            </p>
          </FooterCol>
          <FooterCol>
            <ul>
              <li>
                <a href="/">
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a href="/">
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="/">
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a href="/">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </FooterCol>
          <FooterCol>
            <small>&copy; 2022 Commenda, Inc.</small>
          </FooterCol>
          <FooterCol>
            <h3>Company</h3>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <h3>Links</h3>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <h3>Contact</h3>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
          <FooterCol>
            <p>
              <a href="/">Footer Link</a>
            </p>
          </FooterCol>
        </FooterDiv>
      </Wrapper>
    </Section>
  );
};

export default Footer;
