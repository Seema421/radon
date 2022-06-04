const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { indexBy, flatten } = require('underscore');
const { json } = require('body-parser');

const router = express.Router();
const players=
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

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        players.push(newPlayer)
        res.send(players)
    }
});

router.get('/missinNumber', function(req, res){
  let array =[1,2,3,5,6,7]
  let total=0;
  for (var i in array){
      total+=array[i];
  }
  let n =array.pop()
  let sum =n*(n+1)/2
  let missinNum= (sum-total)
  console.log(missinNum)
   res.send({missinNum})
    }
);
router.get('/missinNumber2', function(req, res){
  let array1=[33,34,,35,37,38]
  let total=0;
  for (var y in array1) {
      total+=array1[y]
  }
  let lastDig=array1.pop()
  let missinNum1=total-lastDig
  console.log(missinNum1)

     res.send({'data': missinNum1})
      
    }
  );
  router.post('/confedential', function(req, res){
    const man=
    [
        {"name":"ana","dob":"11/6/1992","gender":"male","city":"punjab","sports":["swimming"]},
        {"name":"ronak","dob":"15/11/1992","gender":"female","city":"delhi","sports":["cricket"]},
        {"name":"mansi","dob":"20/9/1992","gender":"male","city":"Patna","sports":["basketball"]},
        {"name":"pinky","dob":"25/8/1992","gender":"male","city":"Haryana","sports":["kho-kho"]},
    ]
     let newMan=req.body
    let newManName=newMan.name
    let inNameRepeat=false;
    for (let i=0;i<man.length;i++){
        if(man[i].name==newManName){
            inNameRepeat=true;
           break;
        }
    }   if( inNameRepeat){
        res.send({"name":"diplicate"})
    }   else {
        man.push(newMan)
        res.send(man)
    }  
    });


    router.post('/arrayRedefine', function(req, res){
        let arr =[12,'functioUp',6]
        let newarr =req.body
        let newarri=newarr.i
        let notRepeated=false

       for (let x = 0;x<arr.length;x++){
           if(arr[x]==newarri){
              notRepeated=true
              break;
           } 
       }    if (notRepeated){
           res.send("Duplicate")
       } else {
           arr.push(newarri)
           res.send(arr)
       }

        // arr.push(newarri)

        //     res.send(arr)
         
        });

module.exports = router;
// adding this comment for no reason