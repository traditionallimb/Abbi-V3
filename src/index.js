const traditionalclient = require('./structures/traditionalclient');
const config = require('../config.json');

// eslint-disable-next-line new-cap
const client = new traditionalclient(config);
client.start();
