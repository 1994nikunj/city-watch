const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const { ObjectId } = require("mongodb");
const helper = require("../helpers");

const createUser = async (
	firstName,
	lastName,
	email,
	password
) => {
	const userData = {
		firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
	}

	const userCollection = await users();
	const insertInfo = await userCollection.insertOne(userData);

	if (!insertInfo.acknowledged || !insertInfo.insertedId) {
		throw {
			'code': 500,
			'message': 'Error: Could not add the movie'
		}
	}

	const newId = insertInfo.insertedId.toString();
	const user = await getUserById(newId);
	user._id = String(newId);

	return user;
};
const getUserById = async (id) => {
	const userCollection = await users();
	const user = await userCollection.findOne({ _id: ObjectId(id) });
	if (user === null) {
		throw {
			'code': 404,
			'message': `Error: No movie found with ID: ${id}`
		}
	}
	user._id = id;

	return user;
}

// All routes here

// exports
module.exports = {
    createUser,
    getUserById
};
