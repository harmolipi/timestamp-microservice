const moment = require('moment');

exports.get_date = (req, res) => {
  const UNIX_TEST = /^\d{13}$/;
  const dateInput = req.params.date;
  let date;

  if (dateInput === undefined) {
    date = moment();
  } else if (UNIX_TEST.test(dateInput)) {
    date = moment.utc(parseInt(dateInput));
  } else {
    date = moment(dateInput);
  }

  if (!date.isValid()) {
    return res.json({ error: 'Invalid Date' });
  }

  const unix = date.valueOf();
  const utc = `${date.format('ddd, DD MMM YYYY HH:mm:ss')} GMT`;

  return res.json({
    unix: unix,
    utc: utc,
  });
};
