const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()
const Monument = require('./models/MonumentModel')


mongoose.connect(`mongodb+srv://Chin2:Vaibhav19@bharat-mystery.jzmpd.mongodb.net/monuments?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected.")
    });


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));

const monumentsRouter = require('./routes/monuments')

app.use('/', monumentsRouter);

app.get('/', (req,res) => {
	res.send('Welcome to the API')
})

app.get('/putData', (req,res) => {
	res.render('putData')
})

app.post('/postData', (req,res) => {
	var name = req.body.name;
	var place = req.body.place;
	var image = req.body.image;
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;
	var info = req.body.info;

	console.log(req.body)

	newMonument = new Monument({
		'name': name,
		'place' : place,
		'image': image,
		'latitude': latitude,
		'longitude': longitude,
		'info': info
	});

	newMonument.save()
    .then(() => {
		res.send('Added to db');
	})
    .catch((err)=> console.log(err));

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
	console.log(`API listening on port ${PORT}.`);
	if (err) throw err;
});