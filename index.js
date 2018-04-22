const framework = require('./src/framework.js');
const redite = require('redite');
const options = require('./config.json');

const bot = new framework.PollBot(options.token, options.prefixes, options.settings, options.owners, options.config);

bot.on('ready', () => {
    console.log(`Logged into Discord as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`)
})

bot.connect()
