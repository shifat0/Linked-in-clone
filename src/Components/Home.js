import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HomeLeft from "./HomeLeft";
import HomeMain from "./HomeMain";
import HomeRight from "./HomeRight";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Section>
        <h5>
          <a href="#">Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in a record with Upwork and keep business moving
        </p>
      </Section>
      <Layout>
        <HomeLeft />
        <HomeMain />
        <HomeRight />
      </Layout>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 60px 16px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a6bc2;
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: #434b49;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5px), minmax(0, 12px), minmax(300px, 7px);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
