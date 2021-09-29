// dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');

//  ---------------------------------------------------------------------     Endpoints/Routes

//  CRUD - Create, Read, Update, Delete

// get all resources - read
router.get('/', function(req, res) {
    try{
        var rawdata = fs.readFileSync('data.json');
        var students = JSON.parse(rawdata);

        console.log(students);

        res.sendStatus(200).json(students);
    } catch (err){
        res.status(500).json({message: err});
    }


});

// create a new resource - create
router.post('/', function(req, res) {
    res.status(201).json({ message: "success creating resource"});
});

//  update a resource
router.patch('/:id', function( req, res) {
    res.status(200).json({ message: "edited the resource"});
});

// delete a resourse
router.delete('/:id', function(req, res){
    res.status(200).json({ message: "deleted the resoure"});
});



//  ----------------------------------------------------------------  end routes/endpoints

module.exports = router;