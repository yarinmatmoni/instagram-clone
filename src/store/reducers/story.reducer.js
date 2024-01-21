export const SET_STORIES = 'SET_STORIES';
export const ADD_STORY = 'ADD_STORY';

const initialState = {
	stories: [],
};

export const storyReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_STORIES: {
			return { ...state, stories: action.stories };
		}
		case ADD_STORY: {
			return { ...state, stories: [action.story, ...state.stories] };
		}
		default:
			return state;
	}
};
