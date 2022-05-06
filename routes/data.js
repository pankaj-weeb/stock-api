const express = require('express');
const router = express.Router();
const cors = require('cors');
var axios = require('axios');

var config = {
  method: 'get',

  //url: 'https://reqres.in/api/users',
  url: 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY',
  headers: {
  }
};

/* GET quotes listing. */
router.get('/', async function (req, res, next) {
  try {
    res.json((await axios(config)).data);
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
});

module.exports = router;
