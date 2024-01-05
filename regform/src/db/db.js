const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/Registration_Form')
.then(()=>{
    console.log("connect");
})
.catch((error)=>{
    console.log(error);
})
