const User     = require('../models/user')

module.exports = async (bot, msg) => {
    const id = msg.from.id
    user = await User.findOne({id}).catch(err => false)
bot.onText(/(.+)/, (msg, match) => {
    const admin = 737446966;
    const group = '@tryy123';
    const channel = '@tryyyyyyyyyy';
    const botName = '@YourLifedemo_bot';

    const resp = match[0]; 
    console.log(msg)

    
    bot.sendMessage(channel, ` ${user.nickName}:\n` + resp + `\n\n ${botName}`);
    bot.sendMessage(admin, ` ${msg.from.username}  Said: \n` + resp);
    bot.sendMessage(id, ` ${botName}`);
    
  });

}