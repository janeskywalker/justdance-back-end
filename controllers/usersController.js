// const db = require('../models');
const mockData = require('./mockData').mockData

const show = (req, res) => {
    const foundUser = mockData.mockUsers.find((user) => {
        return user.id === req.session.currentUser.id
    })

    if (foundUser) {
        res.send(foundUser)
    } else {
        res.status(404).json({ status: 404, message: 'User not found' });
    }
    //   db.User.findById(req.session.currentUser.id, { password: 0, __v: 0 },  (err, foundUser) => {

    //         if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    //         db.Post.find({User: req.session.currentUser.id})
    //         .populate('City')
    //         .exec((err, foundPosts) => {
    //             if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

    //             res.status(200).json({ status: 200, user: foundUser, posts:foundPosts });
    //         })

    //   });    
};

module.exports = {
  show,
};

