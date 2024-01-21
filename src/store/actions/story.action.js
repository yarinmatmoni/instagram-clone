import { storyService } from '../../services/story.service';
import { ADD_STORY, SET_STORIES } from '../reducers/story.reducer';
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
