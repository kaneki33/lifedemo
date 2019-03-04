const Bot     = require('node-telegram-bot-api');
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
bot.onText(/(.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const admin = 737446966;
    const group = '@tryy123';
    const channel = '@tryyyyyyyyyy';
    const resp = match[0]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    console.log(msg)

    
    bot.sendMessage(group, ` ${msg.from.username} Said: \n` + resp);
    bot.sendMessage(admin, ` ${msg.from.username} Said: \n` + resp);
    bot.deleteMessage(chatId,msg.message_id);
  });
  bot.on('message', (msg) => {
    console.log(msg);
    const channel = '@tryyyyyyyyyy';
    // send a message to the chat acknowledging receipt of their message
    bot.deleteMessage(channel,msg.messageId);
    bot.sendMessage(channel,'deleted');
  });

  module.exports = bot