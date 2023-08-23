require('./models/User')
require('./models/Track')
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth')



const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoURL = 'mongodb+srv://admin:ISureRememberThat@trackcluster.1dzzjyz.mongodb.net/';

mongoose.connect(mongoURL);
mongoose.connection.on('connected', () => {
    console.log('Server is connected to the database');
})
mongoose.connection.on('error', (err) => {
    console.log('Server failed to connect to the database', err);
})

app.get('/', requireAuth, (req, res) => {
    
    res.send(`your email is ${req.user.email}`);
})

app.listen(3000, () => {
    console.log("I'm listening on port 3000");
})