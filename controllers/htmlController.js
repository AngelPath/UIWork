var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res) => {
    console.log('entering the root home page');
    res.render('landing');

});

router.get('/homepage', (req, res) => {
    console.log('entering the home page');
    res.render('homepage');

});

router.get('/lookup', (req, res) => {
    console.log('entering the lookup page');
    res.render('lookup');

});
router.get('/homepage2', (req, res) => {
    console.log('entering the lookup page');
    res.render('homepage2');

});
router.get('/report', (req, res) => {
    console.log('entering the lookup page');
    res.render('report');

});
module.exports = router;