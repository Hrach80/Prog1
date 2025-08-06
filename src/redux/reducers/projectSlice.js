import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: {
    video1: { likes: 0, comments: [], loadingComments: false, error: null },
    video2: { likes: 0, comments: [], loadingComments: false, error: null },
    video3: { likes: 0, comments: [], loadingComments: false, error: null },
    video4: { likes: 0, comments: [], loadingComments: false, error: null },
  },
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setLikes(state, action) {
      const { videoId, likesCount } = action.payload;
      if (state.videos[videoId]) {
        state.videos[videoId].likes = likesCount;
      }
    },
  
    addLike(state, action) {
      const videoId = action.payload;
      if (state.videos[videoId]) {
        state.videos[videoId].likes += 1;
      }
    },
    setComments(state, action) {
      const { videoId, comments } = action.payload;
      if (state.videos[videoId]) {
        state.videos[videoId].comments = comments;
      }
    },
  },
});

export const { setLikes, addLike, setComments } = projectSlice.actions;
export default projectSlice.reducer;
