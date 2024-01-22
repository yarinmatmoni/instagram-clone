export const SET_STORIES = 'SET_STORIES';
export const ADD_STORY = 'ADD_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';

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
		case UPDATE_STORY: {
			return {
				...state,
				stories: state.stories.map((story) => (story._id === action.story._id ? action.story : story)),
			};
		}
		default:
			return state;
	}
};
