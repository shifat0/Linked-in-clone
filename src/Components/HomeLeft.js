import React from "react";
import styled from "styled-components";

const HomeLeft = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackGround />
          <a>
            <Photo />
            <Link>Welcome, There!</Link>
          </a>
          <a>
            <AddPhotoText>Add Your Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grew Your Network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="widget"></img>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="item"></img>
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="plus"></img>
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 0.4s;
  position: relative;
  border: none;
  box-shadow: 0px 0px 2px gray;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackGround = styled.div`
  background: url("/images/card-bg.svg");
  background-size: 462px;
  background-position: center;
  height: 54px;
  margin: -12px -16px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background: url("/images/photo.svg");
  height: 72px;
  width: 72px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-color: #fff;
  background-position: center;
  background-size: 60%;
  margin: -38px auto 12px;
  border: 2px solid #fff;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a6bc2;
  font-size: 12px;
  margin-top: 4px;
  line-height: 1.33;
  font-weight: 500;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &::nth-child(2) {
          color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 0.1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.6);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0;
  margin-top: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: #000;
    padding: 4px 12px;
    transition: 0.4s;
    text-decoration: none;

    &:hover {
      color: #0a6bc2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #86cec2;
      padding: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default HomeLeft;
