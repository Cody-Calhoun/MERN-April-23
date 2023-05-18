const User = require('../models/user.model');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
// Will need this for login funcitonality
const bcrypt = require('bcrypt');

module.exports = {
    // register a new user

    register: async (req, res) => {
        try {
            const potentialUser = await User.findOne({ email: req.body.email });
            if (potentialUser) {
                return res.status(400).json({
                    message: "Email already exists"
                });
            }
            const newUser = await User.create(req.body);
            const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, secret, {expiresIn: "2h"});
            res.cookie("usertoken", userToken, secret, {httpOnly: true}).json({
                message: "Success!",
                user: newUser
            });
        } catch (err) {
            return res.json(err);
        }
        }
}