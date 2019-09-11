const db = require('../models');

// show all studios
const index = (req, res) => {
  console.log('server: requsting all studios')
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
    console.log(foundStudio)
    res.send(foundStudio)
  });


}

// creating post for a city
// const createPost = 

module.exports = {
  index,
  show,
  // createPost
};
