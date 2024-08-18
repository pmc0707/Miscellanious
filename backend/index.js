 
const express = require('express');
const app = express();
const port = 8080;


app.get('/register', (req, res) => {
    res.send('register GET respond');
})
app.post('/register', (req, res) => {
    res.send('Register POST respond');
})
app.post('/register', (req, res) => {
    let {user,password}=req.body;
    res.send('Register POST respond'+user);
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})