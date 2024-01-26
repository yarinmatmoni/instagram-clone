import Avatar from "../assets/images/avatar.png";

const Comment = ({ comment, by }) => {
  return (
    <div className="comment">
      <div className="comment-user-info">
        <img src={Avatar || by?.imgUrl} alt="profile image" />
        <div className="comment-username">
          {by.userName ? by?.userName : by}
        </div>
      </div>
      <textarea className="comment-txt" readOnly value={comment} />
    </div>
  );
};

export default Comment;
