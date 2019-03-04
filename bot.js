var TelegramBot = require('node-telegram-bot-api');

var token = '776839207:AAGPOS9RH1n0fFwqhp-W7xfTUGVXdUVaXRY';

var bot = new TelegramBot(token, {polling: true});
bot.sendMessage(737446966, `  onlne: \n`);
bot.onText(/(.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const messageId = msg.message_id;
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
  });/*
  bot.on('message', (msg) => {
    console.log(msg)
    const messageId = 140;
    const channel = '@tryyyyyyyyyy';
    // send a message to the chat acknowledging receipt of their message
    bot.deleteMessage(channel, messageId);
  });*/