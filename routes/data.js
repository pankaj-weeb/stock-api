const express = require('express');
const router = express.Router();
const cors = require('cors');
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY',
  headers: {
    //'Cookie': 'ak_bmsc=26A93F5AFA3D3AC3261C19FF2EF764DE~000000000000000000000000000000~YAAQMyEPF/Y4zn2AAQAAHpwKgw/Ha+Jnjgr/YqA9rzLwr5rF05wpJrmCSha2nUt34+9kyqqfZTkg9c9rug+cCd4Zk4rK8V6pQHN2GgksJz6KtgYCyX8dGXV9sSb4WQ9sjHtrBznpkRupiu8g/dGcNtpPrcA65PAE55kCy8jI1qfvk5PWG++w9rAQ4t6GsKQCKKGpFzXFPViO1RbuGtp5/7lpW2Rj3f2SMQ+DOoIKqAhXm502xc+0AE7M7fUIJ+PtMigkG6uybCYhZ7cgTrYSw4cxzcXr82or2ZDbOcJLlLvFQX9AuycfSHuPmr5WByyXMOedeNbpixjtcWORSoGUG+YXOtCvK/FrdjMr2YYAOTSxfgrZSKxvx9PbJzul4Ao='
  }
};


//const quotes = require('../services/quotes');

/* GET quotes listing. */
router.get('/', async function (req, res, next) {
  try {
    res.json((await axios(config)));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
});

module.exports = router;
