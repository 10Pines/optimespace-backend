const express = require('express');
const app = express();
const morgan = require('morgan');

const routes = require('./routes');
const routesAPI = require('./routes-api');

// settings
app.set('appName','Optimespace Backend');
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

// middlewares
app.use(morgan('combined'));

//rutas
app.use(routes);
app.use('/api',routesAPI);


app.get('*', (req,res) => {
  res.end('Not found');
});
// Empezar el server
app.listen(3000, () => {
  console.log('App: ',app.get('appName'));
  console.log("Up and running on port: 3000");
});

