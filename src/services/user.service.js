import { utilsService } from "./utils.service";

const STORAGE_KEY = "user";

const getMiniUser = async () => {
  const user = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const { _id, userName, fullName, imgUrl } = user;
  return { _id, userName, fullName, imgUrl };
};

// PRIVATE FUNCTIONS
const _createDemoData = () => {
  const user = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!user) {
    const demoUser = _createUser();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));
  }
};

const _createUser = () => {
  return {
    _id: utilsService.makeId(),
    userName: "_defaultUserName",
    password: "password",
    fullName: "defaultFullName",
    imgUrl:
      "https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg",
    following: [],
    followers: [],
    savedStoryIds: [],
  };
};

_createDemoData();

export const userService = { getMiniUser };
