import { Story } from './index';

const StoryList = ({ stories, onUpdateStory }) => {
	if (!stories) return <div>Loading...</div>;
	return (
		<div className='story-list'>
			{stories?.map((story) => (
				<Story key={story._id} story={story} onUpdateStory={onUpdateStory} />
			))}
		</div>
	);
};

export default StoryList;
