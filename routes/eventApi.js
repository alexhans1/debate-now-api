const express = require('express');
const router = express.Router();

module.exports = function (sequelize) {

	Event = require('../models/events')(sequelize);

	router.get('/', async function(req, res) {
		try {
			events = await Event.findAll();
			console.info('Fetching all events.');
			res.send(events);
		} catch (ex) {
		    console.error(ex);
			next('Error while fetching all events.');
		}
	});

  router.get('/bduEvents', async function(req, res) {
    try {
      events = await Event.findAll({
        where: {
          allowRegFromMembersArea: 1,
        }
      });
      console.info('Fetching all BDU events.');
      res.send(events);
    } catch (ex) {
      console.error(ex);
      next('Error while fetching all BDU events.');
    }
  });

	router.get('/:id', async function(req, res) {
		try {
			event = await Event.findOne({
				where: {
					id: req.params.id
				}
			});
			console.info('Fetching specific event.');
			res.send(event.toJSON());
		} catch (ex) {
		    console.error(ex);
			next('Error while fetching specific event.');
		}
	});

	router.post('/', async function(req, res) {
		try {
			event = await Event.create({
				institution: req.body.institution,
				type: req.body.type,
				date: req.body.date,
				password: req.body.password,
        allowRegFromMembersArea: req.body.allowRegFromMembersArea,
      });
			console.info('Creating new event.');
			res.send(event.toJSON());
		} catch (ex) {
		    console.error(ex);
		    next('Error while creating new event.');
		}
	});

	router.put('/:id', async function(req, res) {
		try {
			Event.update({
				institution: req.body.institution,
				type: req.body.type,
        status: req.body.status,
        date: req.body.date,
        password: req.body.password,
        allowRegFromMembersArea: req.body.allowRegFromMembersArea,
			}, {
				where: {
					id: req.params.id
				}
			})
			.then((event, err) => {
				if (err) {
					console.log(err);
					next(err);
				} else {
					console.info('Updating event.');
					res.send(event);
				}
			});
		} catch (ex) {
		    console.error(ex);
		    next('Error while creating new event.');
		}
	});

	router.delete('/:id', async function(req, res) {
		try {
			Event.destroy({
				where: {
					id: req.params.id
				}
			})
			.then((event, err) => {
			    if (err) {
			        console.log(err);
			        next(err);
			    } else {
					console.info('Deleting event.');
					console.log(event);
					res.send('Deleted event.');
				}
			});
		} catch (ex) {
		    console.error(ex);
		    next('Error while creating new event.');
		}
	});

	return router;
};
