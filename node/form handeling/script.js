const express = require('express');
const app = express();

app.use(express.json) //  convert your blob in json
app.use(express.urlencoded({ extended: true })) // convert your blob in redable string for the server