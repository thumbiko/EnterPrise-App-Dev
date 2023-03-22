const express = require('express');
const app = express();

serverPort = 5000;




app.get('/', (req, res) => {
    res.send('Welcome to express server')
})

app.get('/about', (req, res) => {
    res.send('<h1> You have navigated to <a href="http://localhost:5000"</h1>')
})


app.listen(serverPort, ()=>{
    console.log("node is listening on port 5000" );
});