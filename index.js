const express = require('express');
const model = require('./models/index.js');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

const log = (msg)=>console.log(msg);

const url = "mongodb://0.0.0.0:27017/parcelkoi";
const options = {};

const connectiondb=()=>{
    mongoose.connect(url,options,(err,db)=>{
        if(err){
            console.log(err);
        }
        else{
            log("database Connection");
        }
    })
};
connectiondb();
app.get("/",(req,res)=>{
    res.send("OK");
});
app.post("/",(req,res)=>{
    const body = req.body;
    console.log(body);
    const user = new model.User({username: body.username,createAt:new Date()});
    user.save().then((savedUser)=>{
        res.status(201).send("User saved: " + savedUser._id);
    }).catch((error)=>{
        res.status(500).send(error);
    });
    //res.send("hello" + req.body.message);
});
app.listen(3000,()=>{
    console.log("Done");
});

log(model)