const express = require('express');
var bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/',(req,res)=>{
  res.render('home',{title:'FinHelper'});
});

router.post('/',(req,res)=>{
  //dummy data
  var que = req.body.que;
  fs.readFile('./solution.json','utf-8',(err,dat)=>{
    if (err) throw err;
    var data = JSON.parse(dat);
    data = data[que];
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

router.post('/', [
    body('question').isLength({min:1}).withMessage('Fill the question'),
  ],(req,res)=>{
    const errs = validationResult(req);
    if(errs.isEmpty()){
      // Return the view of answers
      res.render('home',{title:'FinHelper'})
    }else{
      //res.render('form', { title: 'Registration form' ,errors:errs.array(),data:req.body,});
      //res.sendFile(path.join(__dirname+'/../views/home.html'));
      console.log(errs);
    }
  }
);


module.exports = router;
