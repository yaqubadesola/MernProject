const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000

app.use('/',express.static(path.join(__dirname, "/public")))
app.use('/',require('./routes/root'))
app.use("*", (req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views','404.html'))
    } else if(req.accepts('json')){
        res.join({message:"404 not Found"})
    } else{
        res.type("txt").send("404 not found")
    }

})
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))