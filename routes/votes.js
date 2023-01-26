const express = require('express');
const voteRouter = express.Router();
const {IpRestrict} = require('../utils/ip-restrict')
const INFO = 'Thank you for your vote!';

const votes = {
    yes: 0,
    no: 0,
};

const isIpAlreadyVoted = new IpRestrict();

voteRouter

    .get('/check', (req, res) => {
        const checkInfo = Object.entries(votes).map(([name, votesAmount]) => `Votes on ${name}: ${votesAmount}.`).join('<br>');
        res.send(checkInfo);
    })

    .get('/:voteResult', (req, res) => {

        if (!isIpAlreadyVoted.check(req.ip)) {
            res.status(403).send('You already have voted in this survey!');
            return;
        }

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
