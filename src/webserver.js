const express = require('express');
const app = express();
const path = require('path');

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/home', (request, response) => {
    response.sendFile(path.join(__dirname + '/../resources/index.html'))
})

app.listen(80, () => console.log('Server running on port 80'));
