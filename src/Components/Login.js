import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="login-logo"></img>
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to our professional community</h1>
          <img src="/images/login-hero.svg" alt="hero"></img>
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="sign in"></img>
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  max-width: 1120px;
  margin: 0 auto;
`;

const Nav = styled.div`
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0px 0px 2px #0a56c2;
  color: #0a68c2;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 8px 24px;
  text-align: center;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a68c2;
  }
`;

const Section = styled.section`
  align-content: start;
  display: flex;
  min-height: 600px;
  padding-top: 60px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
    padding-top: 20px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 300;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 630px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    top: 120px;

    @media (max-width: 768px) {
      width: initial;
      position: initial;
      height: initial;
      margin-top: 10px;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin: 0 auto;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border: 0;
  border-radius: 28px;
  box-shadow: 1px 1px 5px gray;
  vertical-align: middle;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.4s;
  img {
    margin-right: 10px;
  }

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
