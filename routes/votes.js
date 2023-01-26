const express = require('express');
const voteRouter = express.Router();
const INFO = 'Thank you for your vote!';

const btn = document.querySelector('button');
let counter;
btn.addEventListener('click', () => {
    counter++;
})
voteRouter
    .get('/votes/set/:yes', (req, res) => {
        res.send(INFO);
    })

    .get('votes/set/:no', (req, res) => {
        res.send(INFO);
    })

    .get('votes/check', (req, res) => {
        try {
            res.send(`Scores: ${counter}`);
        } catch (err) {
            res.send('No scores!');
        }
    })



module.exports = {
    voteRouter,
}