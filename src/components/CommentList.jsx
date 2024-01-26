import { Comment } from "./index";

const CommentList = ({ comments, text, byUser }) => {
  if (comments?.length === 0 || !text || !byUser)
    return <div>No comments yet...</div>;

  return (
    <div className="comment-list">
      <div className="story-txt">
        <Comment comment={text} by={byUser.userName} />
      </div>
      <div className="comments-list">
        {comments?.map((comment) => (
          <Comment key={comment._id} comment={comment.txt} by={comment.by} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
