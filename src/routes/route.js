const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { indexBy, flatten } = require('underscore');
const { json } = require('body-parser');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});


router.get('/movies', function(req, res){
    const movies = ['Titanic','Special 26','Bhagat Singh','Udta Punja','Love Story']
    console.log('Hit movie lists are '+ movies)//this will print at console
    res.send(movies)//this will got to user
     

})

router.get('/movies/:indexNumber', function(req, res){
    const movies = ['Titanic','Special 26','Bhagat Singh','Udta Punja','Love Story']
    const movieIndex=req.params.indexNumber
    let finalMovie= ''
    if(movieIndex<movies.length){
        finalMovie=movies[movieIndex];
    } else {
        finalMovie=("the movie with index no. doesnt exist")
    }
    res.send(finalMovie)// console.log(finalMovie)//y we did not wrote console because we want to send this to user
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Movies name is '+ (finalMovie))
    // res.send('finalMovie')
    
})

router.get('/films', function(req, res){
    const movies = [{'id':1,'name':'The Shinning'},{'id':2,'name':'Incedies'},{'id':3,'name':'Rang De       Basanati'},{'id':4,'name':'Finding Nemo'}]
    
  const outcome = console.log(underscore.flatten([{'id':1,'name':'The Shinning'},{'id':2,'name':'Incedies'},{'id':3,'name':'Rang De   Basanati'},{'id':4,'name':'Finding Nemo'}]))
   
    res.send(movies)
   
    
})

router.get('/films/:filmid', function(req, res){
    const movies = [{'id':1,'name':'The Shinning'},{'id':2,'name':'Incedies'},{'id':3,'name':'Rang De       Basanati'},{'id':4,'name':'Finding Nemo'}]
    const movieid=req.params.filmid
    let resultMovie=''
    if (movieid<movies.length){
        resultMovie=movies[movieid]
    } else {
        resultMovie=('This moview does not exist')
    }
  
    res.send(resultMovie)
    console.log("User is requesting for "+ JSON.stringify(resultMovie))
   
    
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason