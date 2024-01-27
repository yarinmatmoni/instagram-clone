import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoryList, Suggest } from "../components/index";
import {
  addNewStory,
  loadStories,
  updateStoryComments,
  updateStoryLike,
} from "../store/actions/story.action";
import { uploadService } from "../services/upload.service";
import { storyService } from "../services/story.service";
import { loadCurrentUser } from "../store/actions/user.action";

const Home = () => {
  const navigate = useNavigate();
  const stories = useSelector((storeState) => storeState.storyReducer.stories);
  const [story, setStory] = useState(storyService.getDefaultStory());

  useEffect(() => {
    loadStories();
    loadCurrentUser();
  }, []);

  useEffect(() => {
    if (!story.imgUrl) return;
    addNewStory(story);
    onDeleteStory();
    navigate("/");
  }, [story.imgUrl]);

  const onShareStory = async (image) => {
    try {
      const { secure_url } = await uploadService.uploadImg(image);
      setStory((prevData) => ({ ...prevData, imgUrl: secure_url }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  console.log("update story");

  const onEditStory = (event) => {
    const { value, name: filedName } = event.target;
    setStory((prevData) => ({ ...prevData, [filedName]: value }));
  };

  const onDeleteStory = () => {
    setStory(() => storyService.getDefaultStory());
  };

  const onUpdateStoryLike = (storyId) => {
    updateStoryLike(storyId);
  };

  const onAddCommit = (storyId, comment) => {
    updateStoryComments(storyId, comment);
  };

  return (
    <div className="home">
      <StoryList stories={stories} onUpdateStoryLike={onUpdateStoryLike} />
      <Suggest />
      <Outlet
        context={{
          story,
          onEditStory,
          onDeleteStory,
          onShareStory,
          onAddCommit,
        }}
      />
    </div>
  );
};

export default Home;
