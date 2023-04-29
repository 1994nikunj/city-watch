const usersRoutes = require('./users');
const eventsRoutes = require('./events');
const reportsRoutes = require('./reports');


// ===================================================================
const constructorMethod = (app) => {
	app.use('/users', usersRoutes);
	app.use('/events', eventsRoutes);
	app.use('/reports', reportsRoutes);

	app.use('*', (request, response) => {
		response
			.status(404)
			.json({
				error: 'URL Not found!'
			});
	});
};


// ===================================================================
module.exports = constructorMethod;