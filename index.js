const eris = require('eris');
const redite = require('redite');
const options = require('./config.json');

const bot = new eris(options.token, {
    shards: options.shards
});
bot.db = new redite(options.redis);

bot.on('messageCreate', msg => {
    
});

bot.on('messageReactionAdd', msg => {
    
});