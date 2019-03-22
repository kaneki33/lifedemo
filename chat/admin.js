const User = require('../models/user')
module.exports = async (bot, msg) => {
  const text = String(msg.text) || ""
switch (true) {
    case text.startsWith('\/send'):

        const matches = text.match(/\/send(\s+)(.+)(\s+)-(\s+)(.+)/)
        var idd = matches[2];
        var txt = matches[5];
        bot.sendMessage(idd, txt);
        break
    case text.startsWith('\/del'):

          const matches = text.match(/\/del(\s+)(.+)/)
          const nickName = matches[2]
          User.findOneAndRemove({nickName}).then((success) => {
            if (success) 
            {
                bot.sendMessage(msg.chat.id, 'Nick-name deleted');
            }
            else 
            {
                bot.sendMessage(msg.chat.id, ' Nick-name not found');
            }
          }) 
        break
default:
        break

}};