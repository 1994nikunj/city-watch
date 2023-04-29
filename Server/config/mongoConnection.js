const MongoClient = require("mongodb").MongoClient;
const settings = require("../config/settings.json");
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

const dbConnection = async () => {
	if (!_connection) {
		_connection = await MongoClient.connect(mongoConfig.serverUrl);
		_db = await _connection.db(mongoConfig.database);
	}

	return _db;
}

const closeConnection = async () => {
	_connection.close();
}

module.exports = {
	dbConnection,
	closeConnection
};
