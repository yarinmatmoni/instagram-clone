import { utilsService } from "./utils.service";
import { storageService } from "./async-storage.service";

const STORAGE_KEY = "stories";
const USER_KEY = "user";

const query = async () => {
  const stories = await storageService.query(STORAGE_KEY);
  return stories.reverse();
};

const addStory = async (story) => {
  const newStory = await storageService.post(STORAGE_KEY, story);
  return newStory;
};

const getStory = async (storyId) => {
  const story = await storageService.get(STORAGE_KEY, storyId);
  return story;
};

const updateStory = async (storyToUpdate) => {
  const story = await storageService.put(STORAGE_KEY, storyToUpdate);
  return story;
};

const getDefaultStory = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  return {
    _id: utilsService.makeId(),
    txt: "",
    by: _createMiniUser(0, user),
    loc: null,
    comments: [],
    likedBy: [],
    tags: [],
  };
};

// PRIVATE FUNCTIONS
const _createDemoData = () => {
  let stories = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!stories || !stories.length) {
    stories = [];

    for (let i = 0; i < 10; i++) {
      const story = _createStory(i);
      stories.push(story);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  }
};

const _createStory = (index) => {
  return {
    _id: utilsService.makeId(),
    txt: `Best trip ever ${index}`,
    by: _createMiniUser(index),
    loc: null,
    comments: _createComment(index),
    likedBy: _createLikes(index),
    tags: [],
  };
};

const _createMiniUser = (index, user) => {
  return {
    _id: utilsService.makeId(),
    fullName: user ? user.fullName : `Full Name ${index}`,
    userName: user ? user.userName : `_UserName ${index}`,
    imgUrl:
      "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
  };
};

const _createComment = (index) => {
  let comments = [];

  for (let i = 0; i < index + 1; i++) {
    const comment = {
      _id: utilsService.makeId(),
      by: _createMiniUser(),
      txt: `good one! ${i}`,
      likedBy: _createLikes(),
    };
    comments.push(comment);
  }

  return comments;
};

const _createLikes = (index) => {
  let likes = [];

  for (let i = 0; i < index + 1; i++) {
    likes.push(_createMiniUser(i));
  }

  return likes;
};

_createDemoData();

export const storyService = {
  query,
  addStory,
  getStory,
  updateStory,
  getDefaultStory,
};
