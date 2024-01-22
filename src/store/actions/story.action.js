import { storyService } from '../../services/story.service';
import { userService } from '../../services/user.service';
import { ADD_STORY, SET_STORIES, UPDATE_STORY } from '../reducers/story.reducer';
import { store } from '../store';

export const loadStories = async () => {
	try {
		const stories = await storyService.query();
		store.dispatch({ type: SET_STORIES, stories });
	} catch (error) {
		console.log('Had issue loading stories');
	}
};

export const addNewStory = async (storyToAdd) => {
	try {
		const newStory = await storyService.addStory(storyToAdd);
		store.dispatch({ type: ADD_STORY, story: newStory });
	} catch (error) {
		console.log('Had issue to add new story');
	}
};

export const updateStory = async (storyId, fieldToUpdate) => {
	try {
		const story = await storyService.getStory(storyId);
		const user = await userService.getMiniUser();
		story[fieldToUpdate] = [...story[fieldToUpdate], user];
		const storyToUpdate = await storyService.updateStory(story);
		store.dispatch({ type: UPDATE_STORY, story: storyToUpdate });
	} catch (error) {
		console.log('Had issue to update the story', error);
	}
};
