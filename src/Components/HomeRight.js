import React from "react";
import styled from "styled-components";

const HomeRight = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="feed"></img>
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <diV>
              <span>#Linkedin</span>
              <button>Follow</button>
            </diV>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Videos</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="right" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="/images/right-banner.jpg" alt="banner"></img>
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 2px gray;
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  list-style: none;
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 15px 0;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      border: 0;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 5px gray;
      padding: 16px;
      display: inline-flex;
      font-weight: 600;
      align-items: center;
      border-radius: 15px;
      max-height: 32px;
      max-width: 480px;
      outline: none;
      cursor: pointer;
      margin-top: 5px;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("images/hashtag-icon.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.div`
  color: #0a6bc2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default HomeRight;
