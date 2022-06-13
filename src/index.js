const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const address = require ('address')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        let currentDay= new Date();
        let currentTime= currentDay.getTime();+ " "
                        + (currentDay.getMonth()+1)+ " "
                        + currentDay.getFullYear()+ " "
                        + currentDay.getHours()
                        + currentDay.getMinutes()
                        + currentDay.getSeconds()

        let url=req.path
        let ip = address.ip()
        console.log (currentDay+currentTime+url+ip);
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
