// const db = require('../models');
const mockData = require('./mockData').mockData;
const uuid = require('uuid')

// creating post for a city
const createMessage = (req, res) => {
    const studioId = req.body.studioId

    const newMessage = {
        _id: uuid(),
        content: req.body.content,
        userId: req.session.currentUser._id,
        studioId: studioId,
    };

    mockData.mockMessages.push(newMessage)

    res.send(newMessage)

    // db.Post.create(newPost, (err, savedPost) => {
    //     console.log('creating new post')
    //     if (err) return res.status(500).json({ status: 500, message: err});
    //     res.send(savedPost)
    // });
}

const deleteMessage = (req, res) => {
    mockData.mockMessages = mockData.mockMessages.filter((message) => {
        return message._id !== req.params._id
    })

    res.send({ status: 'Success' })
    // db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) =>{
    //     console.log('deleting post')
    //     if (err) return res.status(500).json({ status: 500, message: err});
    //     res.send(deletedPost)
    // })
} 

// pull posts of a given user
// const userPosts = (req, res) => {
//     console.log('getting user post')
//     // db.Post.find({User: req.params.userId}, (error, foundPosts) => {
//     //     if (error) return response.sendErrorResponse(res, error);
//     //     console.log({foundPosts})
//     //     // response.sendResponse(res, foundCities);
//     //     res.send(foundPosts.reverse())
//     // });
// }

// pull posts of a given city
const studioMessages = (req, res) => {
    console.log('getting studio messages')
    // db.Post.find({City: req.params.cityId}, (error, foundPosts) => {
    //     if (error) return response.sendErrorResponse(res, error);
    //     console.log({foundPosts})
    //     // response.sendResponse(res, foundCities);
    //     res.send(foundPosts.reverse())
    // });

    res.send(mockData.mockMessages.filter((message) => {
        return req.params.studioId === message.studioId
    }))
}









module.exports = {
  createMessage,
  deleteMessage,
  // userPosts,
  studioMessages,
};
