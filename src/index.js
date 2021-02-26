const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const indexController = require('./controllers/indexController');
const peopleController = require('./controllers/peopleController');

app.get('/api/home', indexController.index);

app.get('/api/people', peopleController.get);
app.get('/api/people/:id', peopleController.getById);
app.post('/api/people', peopleController.post);
app.put('/api/people/:id', peopleController.put);
app.delete('/api/people/:id', peopleController.del);

app.listen(port, function () {
  console.log('Server run .');
});
