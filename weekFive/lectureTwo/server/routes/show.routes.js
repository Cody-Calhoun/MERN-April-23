const ShowController = require('../controllers/show.controller');

module.exports = app => {
    app.get('/api/shows', ShowController.getAllShows);
    app.post('/api/shows', ShowController.createShow);
    app.get('/api/shows/:id', ShowController.getOneShow);
}