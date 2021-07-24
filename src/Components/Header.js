import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg"></img>
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search"></input>
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search"></img>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="#">
                <img src="/images/nav-home.svg" alt="home"></img>
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-network.svg" alt="network"></img>
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-jobs.svg" alt="Jobs"></img>
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-messaging.svg" alt="Messaging"></img>
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img
                  src="/images/nav-notifications.svg"
                  alt="notification"
                ></img>
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a href="#">
                <img src="/images/user.svg" alt="user"></img>
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="down"></img>
                </span>
              </a>
              <SignOut>
                <a href="#">Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a href="#">
                <img src="/images/nav-work.svg" alt="work"></img>
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="down"></img>
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  width: 100%;
  position: fixed;
  z-index: 1000;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  width: 1120px;
  margin: 0 auto;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 200px;
    input {
      border: none;
      background-color: #eef3fa;
      border-radius: 5px;
      width: 218px;
      padding: 8px 40px;
      font-size: 14px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.span`
  width: 40px;
  position: absolute;
  top: 9px;
  left: 2px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid #fff;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: 0.4s;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background-color: #fff;
  box-shadow: 1px 1px 5px gray;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  display: none;
  transition: 0.8s ease;
`;

const User = styled(NavList)`
  a > img {
    height: 24px;
    width: 24px;
    border-radius: 50%;

    span {
      display: flex;
      align-items: center;
    }
  }

  &:hover {
    ${SignOut} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 2px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
