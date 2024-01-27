import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { CommentList, Modal } from "./index";
import Back from "../assets/svgs/btns/back.svg";
import { storyService } from "../services/story.service";
import { useEffect, useState } from "react";
import DefaultImage from "../assets/images/image-placeholder.png";

const StoryDetails = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const [story, setStory] = useState();
  const [comment, setComment] = useState("");
  const { onAddCommit } = useOutletContext();

  useEffect(() => {
    loadStory();
  }, [story]);

  const loadStory = async () => {
    setStory(await storyService.getStory(storyId));
  };

  const onChangeStory = (event) => {
    setComment(event.target.value);
  };

  const onSubmitComment = (event) => {
    event.preventDefault();
    onAddCommit(story._id, comment);
    setComment("");
  };

  return (
    story && (
      <Modal padding={false}>
        <div className="story-details-container">
          <div className="story-details-header">
            <img src={Back} alt="back" onClick={() => navigate(-1)} />
            <div className="title">Comments</div>
          </div>
          <div className="story-image">
            <img src={story?.imgUrl || DefaultImage} alt="story image" />
          </div>
          <div className="story-details">
            <CommentList
              comments={story?.comments}
              text={story?.txt}
              byUser={story?.by}
            />
            <form className="story-details-input" onSubmit={onSubmitComment}>
              <div className="image-container">
                <img src={story.by.imgUrl} alt="profile image" />
              </div>
              <input
                type="text"
                placeholder="Add a comment..."
                onChange={onChangeStory}
                value={comment}
              />
              <button data-disabled={true}>Post</button>
            </form>
          </div>
        </div>
      </Modal>
    )
  );
};

export default StoryDetails;
