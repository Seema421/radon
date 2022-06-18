
const axios = require ('axios');

let weatherOfLondon = async function(req,res){
    try{
       
        let option = {
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=London&appid=d660d0ee8c5aa5605093a395c3602c0c`
        }
        let result = await axios(option)
         let temperature=result.data.main.temp
        res.status(200).send({data:temperature})
    }
catch(err){
    console.log(err)
    res.status(500).send({msg:err.message})
}
}

let tempOfAllCities = async function(req,res){
    try{
        let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let c2 =[]
      
        for(i=0;i<cities.length;i++){
            let obj = {city:cities[i]}
            let result= await axios.get (`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d660d0ee8c5aa5605093a395c3602c0c`)
        
        obj.temp=result.data.main.temp
        c2.push(obj)
    }
        let sorted=c2.sort( function(a,b){  return  a.temp-b.temp})   
    res.status(200).send({msg:sorted})
    
} catch (err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }
}

let memHandler = async function(req,res){
try {
  let memeId=req.query.template_id;
  let text=req.query.text0;
  let tex=req.query.text1
   let userName =req.query.username;
   let passWord=req.query.password;
   let result= await axios.post(`https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text}&text1=${tex}&username=${userName}&password=${passWord}`)
   res.status(200).send({msg:result.data})
}
catch(err){
    console.log(err)
    res.status(500).send({msg:err.message})
}
}


module.exports.weatherOfLondon=weatherOfLondon
module.exports.tempOfAllCities=tempOfAllCities
module.exports.memHandler=memHandler




















