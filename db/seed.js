const db = require('../models');

const studioList = require('./studios.json');


db.Studio.remove({}, () => {
	studioList.forEach(studio => {
		db.Studio.create(studio, (error, createdStudio) => {
			if (error) return console.log(error);
			console.log(createdStudio);
		});
	});
});
