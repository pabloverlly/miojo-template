const express = require('express');
const R = express.Router();

R.get('/', (req,res) => {
    res.send('api')
})


module.exports = R;