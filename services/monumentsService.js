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

        const result = {
            "name" : monument.name,
            "place" : monument.place,
            "image" : monument.image,
            "latitude" : monument.latitude,
            "longitude" : monument.longitude,
            "info" : monument.info,
        }
        res.json(result);
    })
    .catch(err => console.log(err))
}

module.exports = {getMonument};