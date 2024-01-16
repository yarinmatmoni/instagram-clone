const StoryList = ({ stories }) => {
	if (!stories) return <div>Loading...</div>;
	return (
		<div className='story-list'>
			{stories?.map((story) => (
				<div key={story._id}>Story</div>
			))}
		</div>
	);
};

export default StoryList;
