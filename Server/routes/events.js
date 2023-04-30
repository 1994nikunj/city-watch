// ======================================== Vars
const express = require('express');
const router = express.Router();
const data = require('../data');
const eventsData = data.events;
const helper = require('../helpers');


// routes here

router
    .route('/')
    .post(async (request, response) => {
        try {
            const eventBody = request.body;

            const title = eventBody.title;
            const description = eventBody.description;
            const images = eventBody.images;
            const date = eventBody.date;
            const location = eventBody.location;
            const time = eventBody.time;
            const comments = eventBody.comments;

            const newEvent = await eventsData.createEvent(title, description, images, date, location, time, comments);

            response
                .status(helper.successCode)
                .json(newEvent);

        } catch (e) {
            response
                .status(helper.statusCode.BAD_REQUEST)
                .json({ error: e.message });
        }
    });

router
    .route('/:eventId')
    .get(async (request, response) => {
        try {
            let _id = request.params.eventId.trim();
            const eventData = await eventsData.getEventById(_id);

            response
                .status(helper.successCode)
                .json(eventData);

        } catch (e) {
            response
                .status(e.code)
                .json({ error: e.message });
        }
    });
    router.get("/", async (req, res) => {
        try {
            const allEvents = await eventsData.getAllEvents();
            res.json(allEvents);
        } catch (e) {
            res.status(e.code).json({ error: e.message });
        }
    });
    
    
    router.post("/:id/comments", async (req, res) => {
        try {
            const { text, user } = req.body;
            const comment = { text, user };
            const event = await eventsData.addComment(req.params.id, comment);
            res.status(200).json(event);
        } catch (e) {
            res.status(e.code || 500).json({ error: e.message });
        }
    });
// ======================================== export
module.exports = router;
