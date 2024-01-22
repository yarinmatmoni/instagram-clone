// entityType = the "table" in localStorage

const query = (entityType, delay = 200) => {
	let entities = JSON.parse(localStorage.getItem(entityType)) || [];
	return new Promise((resolve) => setTimeout(() => resolve(entities), delay));
};

const get = (entityType, entityId) => {
	return query(entityType).then((entities) => {
		const entity = entities.find((entity) => entity._id === entityId);
		if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`);
		return entity;
	});
};

const post = (entityType, newEntity) => {
	newEntity = { ...newEntity };
	newEntity._id = _makeId();
	return query(entityType).then((entities) => {
		entities.push(newEntity);
		_save(entityType, entities);
		return newEntity;
	});
};

const put = (entityType, updatedEntity) => {
	return query(entityType).then((entities) => {
		const idx = entities.findIndex((entity) => entity._id === updatedEntity._id);
		if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity.id} in: ${entityType}`);
		entities.splice(idx, 1, updatedEntity);
		_save(entityType, entities);
		return updatedEntity;
	});
};

const remove = (entityType, entityId) => {
	return query(entityType).then((entities) => {
		const idx = entities.findIndex((entity) => entity._id === entityId);
		if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`);
		entities.splice(idx, 1);
		_save(entityType, entities);
	});
};

const _save = (entityType, entities) => {
	localStorage.setItem(entityType, JSON.stringify(entities));
};

const _makeId = (length = 5) => {
	let text = '';
	let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

export const storageService = { query, get, post, put, remove };
