"use strict";
const Models = require("../models")

// create an event
const createEvent = (data, res) => {
  Models.Event.create(data)
  .then((data) => {
    res.send({result: 201, message: "Event Created", data});
  })
  .catch((err) => {
    console.log(err);
    res.send({result: 500, error: err.message});
  });
};

// get all events
const getAllEvents = (res) => {
  Models.Event.findAll({})
  .then((data) => {
    res.send({ result: 200, data: data });
  })
  .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

// update an event by ID
const updateEvent = (req, res) => {
  Models.Event.update(req.body, {where: {id: req.params.id}})
  .then((data) => {
    res.send({result: 200, data:data});
  })
  .catch((err) =>{
    console.log(err);
    res.send({result: 500, error: err.message});
  });
};

// delete an event by ID
const deleteEvent = (req, res) => {
  Models.Event.destroy({where: {id: req.params.id}})
  .then((data) => {
    if (data){
      res.send({result:200, message: "Event Deleted"});
    } else {
      res.send({result: 404, message: "Event not found"});
    }
  })
  .catch ((err) => {
    console.log(err);
    res.send({result: 500, error: err.message});
  });
};

module.exports ={
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
}