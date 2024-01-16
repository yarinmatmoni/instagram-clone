import { Story } from './index';

const StoryList = ({ stories }) => {
	if (!stories) return <div>Loading...</div>;
	return (
		<div className='story-list'>
			{stories?.map((story) => (
				<Story key={story._id} />
			))}
		</div>
	);
};

export default StoryList;
