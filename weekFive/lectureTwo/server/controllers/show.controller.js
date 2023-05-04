const Show = require('../models/show.model');

module.exports = {
    // CREATE
    createShow: (req, res) => {
        console.log(req.body)
        Show.create(req.body)
            .then(newShow => res.json(newShow))
            .catch(err => res.status(400).json(err));
    },

    // READ
    getAllShows: (req, res) => {
        Show.find()
            .then(allShows => res.json(allShows))
            .catch(err => res.json(err));
    },

    // READ ONE
    getOneShow: (req, res) => {
        // console.log(req)
        Show.findById(req.params.id)
            .then(oneShow => res.json(oneShow))
            .catch(err => res.json(err));
    },

    // UPDATE

    // DELETE

}

