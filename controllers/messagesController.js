const db = require('../models');

// creating message for a studio
const createMessage = (req, res) => {
    console.log("creating message req", req.body)
    const studioId = req.body.studioId

    const newMessage = {
        content: req.body.content,
        User: req.body.userId,
        Studio: studioId,
    };

    console.log({newMessage})

    db.Message.create(newMessage, (err, savedMessage) => {
        console.log('creating new message');
        if (err) {
            return res.status(500).json({ status: 500, message: err});
        } else {
            console.log('savedMessage: ', savedMessage);
            db.Message.findById(savedMessage._id)
                .populate('User')
                .exec((error, messageWithUser) => {
                    if (error) {
                        return res.status(500).send({ status: 500, message: err});
                    } else {
                        // response.sendResponse(res, foundPokemons);
                        console.log(messageWithUser);
                        res.send(messageWithUser);
                    }
                });
        }
    });
}

const deleteMessage = (req, res) => {


    db.Message.findByIdAndDelete(req.params.id, (err, deletedMessage) =>{
        console.log('deleting message')
        if (err) return res.status(500).json({ status: 500, message: err});
        res.send(deletedMessage)
    })
} 


const updateMessage = (req, res) => {
    const newMessage = {
        content: req.body.content,
    };

    db.Message.findByIdAndUpdate(req.params.id, newMessage, { new: true })
        .populate('User')
        .exec((err, updatedMessage) =>{
            if (err) {
                return res.status(500).json({ status: 500, message: err});
            } else {
                res.send(updatedMessage);
            }
        })
} 



// pull posts of a given city
const studioMessages = (req, res) => {
    console.log('getting studio messages')
    db.Message.find({Studio: req.params.studioId})
        .populate('User')
        .exec((error, foundMessages) => {
            if (error) return response.sendErrorResponse(res, error);
            console.log('foundMessages: ', foundMessages)
            // response.sendResponse(res, foundCities);
            res.send(foundMessages.reverse())
        });


}









module.exports = {
  createMessage,
  deleteMessage,
  studioMessages,
  updateMessage,
};
