const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Joakim W",
        "msg": "First tweet",
        "username": "Joakim"
    }];
    res.end(JSON.stringify(str))
});

router.post('/addTweet', (req, res) => {
    res.end("N/A");
});

router.get('/troops', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://clash-api-troops.herokuapp.com/troops'
    }
    axios.request(options)
        .then((response) => {
            res.json(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
})


module.exports = router;