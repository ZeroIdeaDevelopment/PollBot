const eris = require('eris');
const redite = require('redite');
const options = require('./config.json');

const bot = new eris(options.token, {
    shards: options.shards
});