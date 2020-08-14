const {Router} = require('express');
const router = Router();

router.get('/test',(req,res)=>{
	const data ={
		"name":"Ali",
		"website":"github/aliLorentz"
	};

	res.json(data);
});

module.exports = router;