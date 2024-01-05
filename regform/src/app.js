const express = require('express');
const app = express();
let port = 3000;

const path = require('path');
const regColl = require('./model/model');
const template_path = path.join(__dirname,'../template/views');
app.set('view engine','hbs');
app.set('views', template_path);




require('./db/db');

app.use(express.urlencoded({extended : false}));
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/regdata', async (req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;
        if(password === cpassword){
            const regdata = new regColl({
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phoneNum,
                password: req.body.password,
            });
            const postdata = await regdata.save();
            res.send("Registration Completed Successfully.");
        }
        else{
            res.send("Passwords do not match");
        }
    }
    catch(error){
        if(error.name === 'ValidationError'){
            res.send("All Fields are Required");
        }
        else{
            const keys = Object.keys(error.keyPattern);
            const repeatedField = keys[0];
            res.send(`${repeatedField} is already in use.`);
        }
        
    }
})

app.listen(port,()=>{
    console.log('listening to the port');
})

