const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('./client/static/'));
app.use(express.static('./client/dist/'));


app.listen(PORT);
console.log(`Listening on port ${PORT}`);


// Redirect all server requests to /index.html which will download all the JS resources
// This will enable react router to work on refreshing
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/static/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
});


