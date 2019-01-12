const express = require('express');
const router = express.Router();


// Rutas
router.get('/', (request, response) => {
  response.render('index.ejs');
});

router.get('/login',(req,res)=>{
  res.render('login');
});



module.exports = router;