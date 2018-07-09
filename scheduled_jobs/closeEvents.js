module.exports = (sequelize) => {
  const schedule = require('node-schedule');
  const Event = require('../models/events')(sequelize);

  schedule.scheduleJob('0 14 * * 1', () => {
    console.log('Run Scheduled Job: Close Open and Old Events.');
    try {
      Event.update({
        status: 'CLOSED',
      }, {
        where: {
          status: 'OPEN',
          date: {
            lte: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString()
          },
          id: {
            notIn: [51, 61],
          },
        }
      }).then((event, err) => {
        if (err) {
          console.error(err);
        } else {
          console.info('Closed all old and open events.');
        }
      });
    } catch (ex) {
      console.error(ex);
    }
  });
};
