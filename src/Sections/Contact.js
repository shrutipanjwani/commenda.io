import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Components/Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  max-height: 1100px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 0;
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
  width: 100%;

  p span {
    color: var(--main-color);
    font-weight: bold;
  }
`;

const Content = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${ContentInside}:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;

    h1 {
      font-size: 34px;
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
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const FormBg = styled.div`
  margin-right: 5%;
  width: 40%;
  border: 1px dashed var(--main-color);
  padding: 50px 20px;
  border-radius: 10px;
  position: relative;

  :before {
    content: "\u25EF";
    position: absolute;
    top: -30px;
    left: 43%;
    width: 60px;
    height: 60px;
    text-align: center;
    color: white;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(114, 100, 182, 1),
      rgba(114, 100, 182, 0.5)
    );
    border-radius: 50%;
    font-size: 25px;
    padding: 10px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 10%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border-image-source: linear-gradient(
    90.95deg,
    #7264b6 3.06%,
    rgba(249, 86, 71, 0.07) 96.43%
  );
  border-width: 1px;
  border-image-slice: 1;
  margin-bottom: 20px;
  color: var(--black-color);

  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border-image-source: linear-gradient(
    90.95deg,
    #7264b6 3.06%,
    rgba(249, 86, 71, 0.07) 96.43%
  );
  border-width: 1px;
  border-image-slice: 1;
  margin-bottom: 20px;
  color: var(--black-color);

  &:focus {
    outline: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    console.log("Form data", e);
    e.preventDefault();
  };

  return (
    <Section id="contact">
      <Wrapper>
        <Content>
          <ContentInside>
            <h1>
              <span>Reach out</span> to us!
            </h1>
          </ContentInside>
          <ContentInside>
            <p>
              Get a best-in-class diligence process and peace of mind when
              making investments abroad. Execute, track, and stay up-to-date on
              your investments in foreign jurisdictions without having to lift a
              finger. We will notify you when there is a change in the value of
              your assets and when you have to sign paperwork. Pricing varies
              depending on type and size of investor.{" "}
            </p>
          </ContentInside>
        </Content>
        <FormBg>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormInput>
              <Input
                type="name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </FormInput>
            <FormInput>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={email.toLowerCase()}
                onChange={(e) => onChange(e)}
                required
              />
            </FormInput>
            <FormInput>
              <Input
                type="telephone"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                required
              />
            </FormInput>
            <FormInput>
              <Textarea
                placeholder="Type your Message here"
                name="message"
                value={message}
                onChange={(e) => onChange(e)}
                required
              />
            </FormInput>

            <Button to="/" primary="true">
              Send
            </Button>
          </Form>
        </FormBg>
      </Wrapper>
    </Section>
  );
};

export default Contact;
