const db = require('../models');
// const mockData = require('./mockData').mockData


// show all studios
const index = (req, res) => {
    db.Studio.find({}, (error, foundStudios) => {
        if (error) return res.status(500).send(error);
        console.log({foundStudios})
        // response.sendResponse(res, foundCities);
        res.send(foundStudios)
    });
    
    // res.send(mockData.mockStudios)
}

// show one studio, taking id
const show = (req, res) => {
  console.log('requesting one studio')
  db.Studio.findById(req.params.id, (error, foundStudio) => {
    if (error) return res.status(500).send(error);
    // response.sendResponse(res, foundPokemons);
    res.send(foundStudio)
    });


    // const studio = mockData.mockStudios.find((studio) => {
    //     return studio._id === req.params.id
    // })

    // if (studio) {
    //     res.send(studio)
    // } else {
    //     res.status(404).json({ status: 404, message: 'Studio not found' });
    // }
}

// creating post for a city
// const createPost = 

module.exports = {
  index,
  show,
  // createPost
};
