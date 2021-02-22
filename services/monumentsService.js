const Monument = require('../models/MonumentModel')


function getMonument(req,res){
    Monument.findOne({'name': req.query.name})
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