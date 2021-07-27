import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModal from "./PostModal";
import { getArticlesAPI } from "../Actions/Actions";
import ReactPlayer from "react-player";

const HomeMain = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="user" />
          ) : (
            <img src="/images/user.svg" alt="user" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.png" alt="photo" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.png" alt="video" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.png" alt="event" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="article" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <>
        {props.articles.length === 0 ? (
          <p>There is no article</p>
        ) : (
          <Content>
            {props.loading && <img src="/images/spinner.gif" alt="spinner" />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="user" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/three-dots.svg" alt="dots" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      {!article.shareImage && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.shareImage && (
                          <img src={article.shareImage} alt="sharedImg" />
                        )
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img src="/images/like-emoji.svg" alt="like" />
                        <img src="/images/clap-emoji.svg" alt="clap" />
                        <img src="/images/love-emoji.svg" alt="clap" />
                        <img src="/images/insightful-emoji.svg" alt="clap" />
                        <span>100</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img src="/images/like.png" alt="like" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment.png" alt="comment" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="/images/share.png" alt="share" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send.png" alt="send" />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
        )}
      </>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 2px gray;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;

  & > div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: text;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 10px;
      }
      button {
        margin: 5px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 5px;
      button {
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        span {
          color: #0a6bc2;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 48px;
  flex-wrap: wrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: 0;
    width: 25px;
    outline: none;
    cursor: pointer;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  overflow: auto;
  line-height: 1.5;
  padding: 8px 0;
  margin: 0 10px;
  margin-bottom: 5px;
  li {
    margin-right: 5px;
    font-size: 12px;
  }
  button {
    display: flex;
    align-items: center;
    margin-left: 5px;
    background: transparent;
    border: none;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 12px;
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  button {
    display: inline-flex;
    align-items: center;
    margin-right: 5px;
    padding: 8px;
    color: rgba(0, 0, 0, 0.6);
    background: transparent;
    border: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
      border-radius: 5px;
    }
    @media (min-width: 768px) {
      width: 100%;
      span {
        margin-left: 8px;
      }
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);
