import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  likeVideo,
  postComment,
  fetchComments,
  fetchLikes,
} from "../../../redux/actions/projectActions";
import "../Porjects/Projects.css";

const projectData = [
  {
    id: "video1",
    title: "Project One",
    src: `${process.env.PUBLIC_URL}/Video/video.MOV`,
  },
  {
    id: "video2",
    title: "Project Two",
    src: `${process.env.PUBLIC_URL}/Video/veid2.mp4`,
  },
  {
    id: "video3",
    title: "Project Three",
    src: `${process.env.PUBLIC_URL}/Video/video.MOV`,
  },
  {
    id: "video4",
    title: "Project Four",
    src: `${process.env.PUBLIC_URL}/Video/veid2.mp4`,
  },
];

const ProjectItem = ({ videoId, src, title }) => {
  const dispatch = useDispatch();
  const { likes, comments, loadingComments, error } = useSelector(
    (state) =>
      state.projects?.videos?.[videoId] || {
        likes: 0,
        comments: [],
        loadingComments: false,
        error: null,
      }
  );

  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    dispatch(fetchComments(videoId));
    dispatch(fetchLikes(videoId));
  }, [dispatch, videoId]);

  const handleLike = () => {
    dispatch(likeVideo(videoId));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      dispatch(postComment(videoId, commentText));
      setCommentText("");
      setShowCommentInput(false);
    }
  };

  return (
    <div className="projectone">
      <h2 className="prog-video-title">
        <p>{title}</p>
      </h2>
      <video
        className="projectVideo"
        width="250"
        height="150"
        autoPlay
        loop
        muted
        controls
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-actions">
        <button className="like-button" onClick={handleLike}>
          ❤️ Like ({likes})
        </button>
        <button
          className="comment-button"
          onClick={() => setShowCommentInput(!showCommentInput)}
        >
          Comment ({comments.length})
        </button>
      </div>

      {showCommentInput && (
        <div className="comment-section">
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              className="comment-textarea"
              placeholder="Write your comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows="3"
            ></textarea>
            <button type="submit" className="submit-comment-button">
              Send
            </button>
          </form>
          {loadingComments && <p>Comments are loading...</p>}
          {error && <p className="error-message">Error: {error}</p>}
          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <p key={comment.id} className="single-comment">
                  <strong>You:</strong> {comment.text}
                </p>
              ))
            ) : (
              <p>There are no comments yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const firstRowProjects = projectData.slice(0, 2);
  const secondRowProjects = projectData.slice(2, 4);

  return (
    <div className="ProjectsBox">
      <div className="ProjectDiv1">
        <h1 className="proj-h1">Hi, I'm a Web Developer</h1>
        <p className="NavP">
          I build responsive and user-friendly websites, experienced in HTML,
          CSS, and JavaScript.
        </p>
      </div>

      <div className="ProjectBox2">
        <h2 className="projH2">Featured Projects</h2>
        <div className="yndProjects">
          {firstRowProjects.map((project) => (
            <ProjectItem
              key={project.id}
              videoId={project.id}
              src={project.src}
              title={project.title}
            />
          ))}
        </div>
      </div>

      <div className="ProjectBox2">
        <div className="yndProjects">
          {secondRowProjects.map((project) => (
            <ProjectItem
              key={project.id}
              videoId={project.id}
              src={project.src}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
