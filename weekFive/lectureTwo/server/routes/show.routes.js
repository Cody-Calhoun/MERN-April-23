const ShowController = require('../controllers/show.controller');

module.exports = app => {
    app.get('/api/shows', ShowController.getAllShows);
    app.post('/api/shows', ShowController.createShow);
    app.get('/api/shows/:id', ShowController.getOneShow);
    
    // Changes all values in the DB to match the req.body
    // app.put('/api/shows/:id', ShowController.updateShow);

    // Changes only the values in the req.body
    app.patch('/api/shows/:id', ShowController.updateShow);
    app.delete('/api/shows/:id', ShowController.deleteShow);
}