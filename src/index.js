const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const address = require ("address")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Seema:C5PtEdt23kmtx9ov@cluster0.gjunl.mongodb.net/Seema?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (function(req,res,next){
    const currentDay= new Date();
    const currentTime = currentDay.getTime() + " "
                    + (currentDay.getMonth()+1)+" "
                    +currentDay.getFullYear()+ " "
                    + currentDay.getHours() + ":"
                    + currentDay.getMinutes()+ ":"
                    +currentDay.getSeconds();
    let ip=address.ip()
    let ur = req.path

    console.log(currentDay + currentTime +ip +ur)
    next()

})

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
