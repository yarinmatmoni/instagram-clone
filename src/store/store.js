import { legacy_createStore as createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/user.reducer';
import { storyReducer } from './reducers/story.reducer';

const rootReducer = combineReducers({
	userReducer: userReducer,
	storyReducer: storyReducer,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
