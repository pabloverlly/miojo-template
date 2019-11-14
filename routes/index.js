const express = require('express')
const R = express.Router();


R.get('/', (req,res) => {
    res.render('index', {layout: false});
})



module.exports = R;