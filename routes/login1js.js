var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

router.post('/',function(req,res) {
    let username = req.body.username;
    let password = req.body.password;


    console.log(username);

    let url='mongodb://localhost:27017';
    mongoClient.connect(url,function (error,client) {
        if(err){
            console.log('database connection error:'+error);

        }
        else{


        }
    }
}