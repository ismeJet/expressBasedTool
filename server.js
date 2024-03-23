
const express = require('express');
const path = require('path');

const app = express();
const serverPort = 4444;

// return diff page based on path here
app.get('/', (req, response)=>{
    response.sendFile(path.join(__dirname, 'src/index.html'));
})
app.get('/layoutPrototype/layoutIndex.html', (req, response)=>{
    response.sendFile(path.join(__dirname, 'src/layoutPrototype/layoutIndex.html'));
})

app.listen(serverPort, ()=>{
    console.log(`server is listening on port: ${serverPort}`);
})