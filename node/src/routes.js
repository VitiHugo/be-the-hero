const express = require('express');

const OngController = require('./Controller/OngController');
const IncidentController = require('./Controller/IncidentController');
const ProfileController = require('./Controller/ProfileController');
const SessionController = require('./Controller/SessionControlller');


const routes  = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);


module.exports = routes;