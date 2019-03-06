const Bot     = require('node-telegram-bot-api');
const User     = require('./models/user')
const private = require('./chat/private')
const token   = process.env.TOKEN
let bot
if (process.env.NODE_ENV === 'production') {
  bot = new Bot(token)
  bot.setWebHook(process.env.HEROKU_URL + bot.token)
} else {
bot = new Bot(token, {
  polling: true
})
}
console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode')
bot.sendMessage(737446966,"The bot is online")


bot.on('message', (msg) => {
   switch (true) {
     case (msg.chat.type == 'private'):
       private(bot, msg)
       break
     default:
       break
   }
 });
 
 module.exports = bot