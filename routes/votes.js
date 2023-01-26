const express = require('express');
const voteRouter = express.Router();
const INFO = 'Thank you for your vote!';

const votes = {
    yes: 0,
    no: 0,
};

voteRouter

    .get('/check', (req, res) => {
        const checkInfo = Object.entries(votes).map(([name, votesAmount]) => `Votes on ${name}: ${votesAmount}.`).join('<br>');
        res.send(checkInfo);
    })

    .get('/:voteResult', (req, res) => {
        const {voteResult} = req.params;
        if (typeof votes[voteResult] === 'undefined') {
            votes[voteResult] = 0;
        }

        votes[voteResult]++;

        res.send(INFO);
    });



module.exports = {
    voteRouter,
}
