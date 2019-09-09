const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// create a post, request body need a city id, url params are usually for get request 
router.post('/', authRequired, ctrl.messages.createMessage)

// delete a post
router.delete('/:id', authRequired, ctrl.messages.deleteMessage)

// post index -- get all post
// router.get('/userposts/:userId', authRequired, ctrl.posts.userPosts)

//RESTful routing
// userss/:id/posts/postid
// cities/:id/posts/postid

router.get('/studio-posts/:studioId', authRequired, ctrl.messages.studioMessages)



module.exports = router;
