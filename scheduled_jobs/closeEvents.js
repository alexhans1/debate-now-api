module.exports = (sequelize) => {
  const schedule = require('node-schedule');
  const Event = require('../models/events')(sequelize);

  schedule.scheduleJob('0 20 * * 1', () => {
    try {
      Event.update({
        status: 'CLOSED',
      }, {
        where: {
          status: 'OPEN',
          date: {
            lte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
          }
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
