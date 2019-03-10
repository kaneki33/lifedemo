const User     = require('../models/user')

module.exports = async (bot, msg) => {
    const id = msg.from.id
    user = await User.findOne({id}).catch(err => false)
bot.on('message', (msg) => {
    const admin = 737446966;
    const group = '@tryy123';
    const channel = '@tryyyyyyyyyy';
    const botName = '@YourLifedemo_bot';
    const text = String(msg.text) || ""
    //var resp = match[0]; 
    console.log(msg)

    
    bot.sendMessage(channel, ` ${user.nickName}:\n` + text + `\n\n ${botName}`);
    bot.sendMessage(admin, ` ${msg.from.username}  Said: \n` + text);
    bot.sendMessage(id, ` ${channel}`);
    
  });

}
