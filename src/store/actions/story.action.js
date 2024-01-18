import { storyService } from '../../services/story.service';
import { SET_STORIES } from '../reducers/story.reducer';
import { store } from '../store';

export const loadStories = async () => {
	try {
		const stories = await storyService.query();
		store.dispatch({ type: SET_STORIES, stories });
	} catch (error) {
		console.log('Had issue loading stories');
	}
};
