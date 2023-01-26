const express = require('express');
const {voteRouter} = require("./routes/votes");
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/', voteRouter);

app.listen(3000);