const {Router} = require('express');
const router = Router();

const _ =require('underscore');

const movies = require('../sample.json');

router.get('/',(req,res)=>{
	res.json(movies);
});

router.post('',(req,res)=>{
	const {title,director,year,rating}=req.body;
	if(title && director && rating && year){
		const id = movies.length +1;
		const newMovie ={...req.body,id};
		movies.push(newMovie);
		res.json(movies);
		console.log('Nice solo se guarda en memoria no sample');
	}else{
		res.status(500).json({error:'There was an error'});
	}
	// console.log('postMan recibido');
});

router.put('/:id',(req,res)=>{
	console.log('band');
	const {id}=req.params;
	const {title,director,year,rating}=req.body;
	if(title && director && rating && year){
		_.each(movies,(movie,i)=>{
			if(movie.id == id){
				movie.title = title;
				movie.director=director;
				movie.rating = rating;
				movie.year = year;
			}
		});
		res.json(movies);
	}else{
		res.status(500).json({error:'Error'});
	}
})

router.delete('/:id', (req,res)=>{
	const {id}=req.params;
	_.each(movies,(movie,i)=>{
		if(movie.id==id){
			movies.splice(i,1);
		}
	});
	res.send(movies);
});

module.exports = router;