const mongoCollections = require("../config/mongoCollections");
const events = mongoCollections.events;
const { ObjectId } = require("mongodb");
const helper = require("../helpers");

const createEvent = async (
	title,
	description,
	images,
	date,
	location,
	time,
	comments
) => {
	const eventData = {
		title: title,
		description: description,
		images: images,
		date: date,
		location: location,
		time: time,
		comments: comments
	}
    
	const eventCollection = await events();
	const insertInfo = await eventCollection.insertOne(eventData);

	if (!insertInfo.acknowledged || !insertInfo.insertedId) {
		throw {
			'code': 500,
			'message': 'Error: Could not add the event'
		}
	}

	const newId = insertInfo.insertedId.toString();
	const event = await getEventById(newId);
	event.id = String(newId);

	return event;
};
const getAllEvents = async () => {
    const eventCollection = await events();
    const eventList = await eventCollection.find({}).toArray();
    return eventList;
  };
const getEventById = async (id) => {
	const eventCollection = await events();
	const event = await eventCollection.findOne({ _id: ObjectId(id) });
	if (event === null) {
		throw {
			'code': 404,
			'message': `Error: No event found with ID: ${id}`
		}
	}
	event.id = id;

	return event;
}

const addComment = async (eventId, comment) => {
    const event = await getEventById(eventId);
  
    const newComment = {
      text: comment.text,
      user: comment.user,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  
    event.comments.push(newComment);
  
    const eventCollection = await events();
    const updateInfo = await eventCollection.updateOne(
      { _id: ObjectId(eventId) },
      { $set: event }
    );
  
    if (!updateInfo.acknowledged || updateInfo.modifiedCount === 0) {
      throw {
        code: 500,
        message: "Error: Could not add the comment",
      };
    }
  
    return await getEventById(eventId);
  };

// All routes here

// exports
module.exports = {
    createEvent,
    getEventById,
    getAllEvents,
    addComment
};
