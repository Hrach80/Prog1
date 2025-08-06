import { setLikes, setComments } from "../reducers/projectSlice";

export const fetchLikes = (videoId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/likes/${videoId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch likes");
    }
    const data = await response.json();
    dispatch(setLikes({ videoId, likesCount: data.likesCount }));
  } catch (error) {
    console.error("Error fetching likes:", error);
  }
};
export const likeVideo = (videoId) => async (dispatch, getState) => {
  try {
    const currentLikes = getState().projects.videos[videoId].likes;
    const newLikesCount = currentLikes + 1;
    const responsePut = await fetch(`http://localhost:3001/likes/${videoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: videoId, likesCount: newLikesCount }),
    });
    if (!responsePut.ok) {
      throw new Error("Failed to update likes on the server");
    }
    dispatch(setLikes({ videoId, likesCount: newLikesCount }));
  } catch (error) {
    console.error("Error liking video:", error);
  }
};
export const fetchComments = (videoId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3001/comments?videoId=${videoId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    dispatch(setComments({ videoId, comments: data }));
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};
export const postComment = (videoId, commentText) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ videoId, text: commentText }),
    });
    if (!response.ok) {
      throw new Error("Failed to post comment");
    }
    dispatch(fetchComments(videoId));
  } catch (error) {
    console.error("Error posting comment:", error);
  }
};
