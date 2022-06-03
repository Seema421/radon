const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { indexBy, flatten } = require('underscore');
const { json } = require('body-parser');

const router = express.Router();
const player=
[
    {"name":"ana","dob":"11/6/1992","gender":"male","city":"punjab","sports":["swimming"]},
    {"name":"ronak","dob":"15/11/1992","gender":"female","city":"delhi","sports":["cricket"]},
    {"name":"mansi","dob":"20/9/1992","gender":"male","city":"Patna","sports":["basketball"]},
    {"name":"pinky","dob":"25/8/1992","gender":"male","city":"Haryana","sports":["kho-kho"]},
]

router.post('/players', function(req, res){
  
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < player.length; i++) {
        if(player[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        player.push(newPlayer)
        res.send(player)
    }
});




module.exports = router;
// adding this comment for no reason