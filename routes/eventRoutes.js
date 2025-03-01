const express = require('express');
const Controllers = require("../controllers/eventController")
const eventRouter = express.Router();

// create an event
// http://localhost:8081/api/events/create
eventRouter.post('/create', (req, res) => {Controllers.createEvent(req.body, res)});

// get events
// http://localhost:8081/api/events
eventRouter.get('/', (req, res) => {Controllers.getAllEvents(res)});

// update event
// http://localhost:8081/api/events/:id
eventRouter.put('/:id', (req, res) => {Controllers.updateEvent(req, res)});

// delete event
// http://localhost:8081/api/events/:id
eventRouter.delete('/:id', (req, res) => {Controllers.deleteEvent(req, res)});

module.exports = eventRouter;