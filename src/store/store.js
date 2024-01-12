import { legacy_createStore as createStore } from 'redux';
import { storyReducer } from './reducers/story.reducer';

export const store = createStore(
	storyReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
