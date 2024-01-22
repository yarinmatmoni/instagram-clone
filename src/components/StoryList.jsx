import { Story } from './index';

const StoryList = ({ stories, onUpdateStoryLike }) => {
	if (!stories) return <div>Loading...</div>;
	return (
		<div className='story-list'>
			{stories?.map((story) => (
				<Story key={story._id} story={story} onUpdateStoryLike={onUpdateStoryLike} />
			))}
		</div>
	);
};

export default StoryList;
