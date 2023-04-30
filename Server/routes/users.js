// ======================================== Vars
const express = require('express');
const router = express.Router();
const data = require('../data');
const usersData = data.users;
const helper = require('../helpers');




router
	.route('/')
	.post(async (request, response) => {
		try {
			const userBody = request.body;

			const firstName = (userBody.firstName);
			const lastName = (userBody.lastName);
			const email = (userBody.email);
			const password = (userBody.password);
			const newUser = await usersData.createUser(firstName,lastName,email,password);

			response
				.status(200)
				.json(newUser);

		} catch (e) {
			response
				.status(400)
				.json({ error: e.message });
		}
	});

//routes here
router
	.route('/:userId')
	.get(async (request, response) => {
		try {
			let _id = request.params.userId.trim();
			const usersData = await usersData.getUserById(_id);

			response
				.status(helper.successCode)
				.json(usersData);

		} catch (e) {
			response
				.status(e.code)
				.json({ error: e.message });
		}
	});

// ======================================== export
module.exports = router;