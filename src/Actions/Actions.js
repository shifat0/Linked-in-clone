import { auth, provider, storage } from "../FireBase";
import db from "../FireBase";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./ActionsType";

export const setUser = (result) => ({
  type: SET_USER,
  user: result,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (result) => ({
  type: GET_ARTICLES,
  result: result,
});

export const signInAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((error) => alert(error.message));
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

export const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => console.log(error.message));
  };
};

export const postAticleAPI = (result) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (result.image !== "") {
      const upload = storage
        .ref("images/ ${result.image.name}")
        .put(result.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Progress:", progress, "%");

          if (snapshot.state === "RUNNING") {
            console.log("Progress:", progress, "%");
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: result.user.email,
              title: result.user.displayName,
              date: result.timestamp,
              image: result.user.photoURL,
            },
            video: result.video,
            shareImage: downloadURL,
            comments: 0,
            description: result.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (result.video) {
      db.collection("articles").add({
        actor: {
          description: result.user.email,
          title: result.user.displayName,
          date: result.timestamp,
          image: result.user.photoURL,
        },
        video: result.video,
        shareImage: "",
        comments: 0,
        description: result.description,
      });
      dispatch(setLoading(false));
    }
  };
};

export const getArticlesAPI = () => {
  return (dispatch) => {
    let result;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        result = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(result));
      });
  };
};
