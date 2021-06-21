const Monument = require('../models/MonumentModel')


function getMonument(req,res){
    var Snumber = req.query.sno
    console.log(Snumber)
    Monument.findOne({'Snumber': Snumber})
    .then(monument => {
        if(!monument){
            res.json({
                error : "No Monument Found"
            });
        }

        console.log(monument.ytUrl)
        const result = {
            "name" : monument.name,
            "place" : monument.place,
            "image" : monument.image,
            "latitude" : monument.latitude,
            "longitude" : monument.longitude,
            "info" : monument.info,
            "streetview": monument.streetview,
            "ytUrl": monument.ytUrl,
        }
        res.json(result);
    })
    .catch(err => console.log(err))
}

function getAll(req,res){
    Monument.find({})
    .exec()
    .then((allmonuments) => {
        if(!allmonuments){
            res.json({
                error: 'Some Error Occurred'
            })
        }

        const response = [];

        for(let i = 0; i< allmonuments.length; i++){
            response.push({
                'name': allmonuments[i].name,
                'Snumber': allmonuments[i].Snumber
            })
        }

        res.json(response)
    })
    .catch((err)=> console.log(err))
}

function getQuiz(req,res){
    var Snumber = req.query.sno;
    Monument.findOne({Snumber: Snumber})
    .then((monument) => {
        if(!monument){
            res.json({
                error: 'Some Error Occurred'
            })
        }

        const response = monument.quiz;

        res.json(response)
    })
    .catch((err)=> console.log(err))
}

module.exports = {
    getMonument,
    getAll,
    getQuiz
};