const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/tv_show_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

    // Local host is same as 127.0.0.1
    // mongodb://localhost:27017/tv_show_db