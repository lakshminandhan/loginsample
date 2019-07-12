var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup');
});


router.post('/',function (req,res) {
    let firstName=req.body.firstname;
    let lastName=req.body.lastname;
    let email=req.body.email;
    let mobile=req.body.mob;
    let userName=req.body.username;
    let password=req.body.password;
    let con=req.body.confirm_password;

    console.log(firstName)

    let url='mongodb://localhost:27017';


    mongoClient.connect(url,function (err,client) {
        if(err){
            console.log('database connection error:'+err);

        }else{
            let myDB=client.db('mysample');

            if(myDB){
                console.log('connected')
                myDB.collection('person').insertOne({firstname:firstName,lastname:lastName,username:userName,email:email,mob:mobile,
                    password:password},function(err,result){
                    if(err){
                        console.log('error'+err)

                    }

                    else{
                        console.log('successfully inserted:'+result)
                        res.redirect('/')
                    }
                })
            }
        }

    })
})


module.exports = router;
