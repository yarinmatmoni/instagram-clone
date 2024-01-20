import { utilsService } from './utils.service';
import Avatar from '../assets/images/avatar.png';

const STORAGE_KEY = 'user';

const _createDemoData = () => {
	const user = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if (!user) {
		const demoUser = _createUser();
		localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));
	}
};

// PRIVATE FUNCTIONS
const _createUser = () => {
	return {
		_id: utilsService.makeId(),
		userName: '_defaultUserName',
		password: 'password',
		fullName: 'defaultFullName',
		imgUrl: Avatar,
		following: [],
		followers: [],
		savedStoryIds: [],
	};
};

_createDemoData();

export const userService = {};
