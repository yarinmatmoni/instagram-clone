import { userService } from "../../services/user.service";
import { SET_CURRENT_USER } from "../reducers/user.reducer";
import { store } from "../store";

export const loadCurrentUser = async () => {
  try {
    const currentUser = await userService.getMiniUser();
    store.dispatch({ type: SET_CURRENT_USER, currentUser });
  } catch (error) {
    console.log("Had issue loading user");
  }
};
