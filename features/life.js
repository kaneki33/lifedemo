bot.onText(/(.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const admin = 737446966;
    const group = '@tryy123';
    const channel = '@tryyyyyyyyyy';
    const botName = '@YourLifedemo_bot';
    const resp = match[0]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    console.log(msg)

    
    bot.sendMessage(channel, ` ${msg.from.username} \n :` + resp + `\n\n ${botName}`);
    bot.sendMessage(admin, ` ${msg.from.username}  Said: \n` + resp);
    bot.sendMessage(chatId, ` ${botName}`);
  });