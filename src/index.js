const traditionalclient = require('./structures/traditionalclient');
const config = require('../.env');

const client = new traditionalclient(config);
client.login()