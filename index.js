const express = require('express')
const studentsRouter = require('./router');

const app = express();

app.use('/students', studentsRouter);

let port = 3000;
app.listen(port, ()=>{
    console.log("Server is running in ", port);
})