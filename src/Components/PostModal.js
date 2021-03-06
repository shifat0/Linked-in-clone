import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postAticleAPI } from "../Actions/Actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert("not an image, the file is a ${typeof(image)}");
      return;
    }
    setShareImage(image);
  };

  const swicthAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const result = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.postArticle(result);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a Post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="/images/close-icon.png" alt="close" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="user" />
                ) : (
                  <img src="/images/user.svg" alt="user" />
                )}
                <span>
                  {props.user.displayName ? props.user.displayName : "Name"}
                </span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      except="images/jpg, images/jpeg, images/gif, images/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer witdh={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <Attach>
                <AttachButton onClick={() => swicthAssetArea("image")}>
                  <img src="/images/photo-icon.png" alt="share" />
                </AttachButton>
                <AttachButton onClick={() => swicthAssetArea("media")}>
                  <img src="/images/video-icon.png" alt="share" />
                </AttachButton>
              </Attach>
              <Comment>
                <AttachButton>
                  <img src="/images/comment.png" alt="comment" />
                </AttachButton>
              </Comment>
              <PostButton
                onClick={(e) => postArticle(e)}
                disabled={editorText ? false : true}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  color: #000;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 98%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  vertical-align: center;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 48px;
    height: 48px;
    background-color: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
  }
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
`;

const Attach = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

const AttachButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.5);
  img {
    width: 20px;
    height: 20px;
  }
  &:last-child {
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const Comment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  img {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding: 0 16px;
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.8)" : "#0a6bc2"};
  color: #fff;
  transition: 0.4s;
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#004182")};
    cursor: pointer;
  }
`;

const Editor = styled.div`
  padding: 16px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (result) => dispatch(postAticleAPI(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
