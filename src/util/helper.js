const printDate=function(){
    let s= new Date();
    let currentday=s.getDate()
    console.log("Current Date: " +currentday)
}
const printMonth = function () {
    let s = new Date();
    const currentMonth = s.getMonth() + 1;
    console.log("Current Month : " + currentMonth);
}

let batch = function getbatchinfo(){
    console.log('Radon W3D3,the topic for today was Nodejs')
}
module.exports.now=printDate();
module.exports.month=printMonth();
module.exports.batch=batch()
