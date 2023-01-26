const express = require('express');
const voteRouter = express.Router();
const INFO = 'Thank you for your vote!';

let voteForYes = 0;
let voteForNo = 0;

voteRouter
    .get('/yes', (req, res) => {
        res.send(INFO);
        voteForYes++;
    })

    .get('/no', (req, res) => {
        res.send(INFO);
        voteForNo++;
    })

    .get('/check', (req, res) => {
        try {
            res.send(`Votes for YES: ${voteForYes}, votes for NO: ${voteForNo}`);
        } catch (err) {
            res.send('No votes!');
        }
    })



module.exports = {
    voteRouter,
}