const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// create a message, request body need a city id, url params are usually for get request 
router.post('/', authRequired, ctrl.messages.createMessage)

// delete a message
router.delete('/:id', authRequired, ctrl.messages.deleteMessage)

// delete a message
router.put('/:id', authRequired, ctrl.messages.updateMessage)

// message index -- get all message
// router.get('/usermessages/:userId', authRequired, ctrl.messages.usermessages)

//RESTful routing
// userss/:id/messages/messageid
// cities/:id/messages/messageid

router.get('/studio/:studioId', authRequired, ctrl.messages.studioMessages)

module.exports = router;
