// const db = require('../models');
const mockData = require('./mockData').mockData


// show all cities
const index = (req, res) => {
    // db.City.find({}, (error, foundCities) => {
    //     if (error) return res.status(500).send(error);
    //     console.log({foundCities})
    //     // response.sendResponse(res, foundCities);
    //     res.send(foundCities)
    // });
    
    res.send(mockData.mockStudios)
}

// show one city, taking id
const show = (req, res) => {
  console.log('requesting one studio')
//   db.City.findById(req.params.id, (error, foundCity) => {
//     if (error) return res.status(500).send(error);
//     // response.sendResponse(res, foundPokemons);
//     res.send(foundCity)
//     });
    const studio = mockData.mockStudios.find((studio) => {
        return studio._id === req.params.id
    })

    if (studio) {
        res.send(studio)
    } else {
        res.status(404).json({ status: 404, message: 'Studio not found' });
    }
}

// creating post for a city
// const createPost = 

module.exports = {
  index,
  show,
  // createPost
};
