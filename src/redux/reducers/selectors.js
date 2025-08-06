

export const selectTotalLikes = (state) => {
  const allVideos = state.projects?.videos || {}; 

  
  const totalLikes = Object.values(allVideos).reduce(
    (sum, video) => sum + (video.likes || 0),
    0
  );

  return totalLikes;
};
