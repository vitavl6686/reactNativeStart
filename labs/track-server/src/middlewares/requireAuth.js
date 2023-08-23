const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const {authorisation} = req.headers;
    //authorisation = 'Bearer sdsdsdsdsdsd'
    if (!authorisation) {
        res.status(401).send({error: "You must be logged in"});
    }

    const token = authorisation.replace('Bearer ', '');

    jwt.verify(token, 'PASSWORD', async (err, payload) => {
        if (err) {
            return res.status(401).send({error: 'You must be logged in'})
        }
        console.log(payload)
        const { id } = payload;
        const user = await User.findById(id);
        
        req.user = user;
        next();
    })

    

}