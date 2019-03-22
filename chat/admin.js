const User = require('../models/user')
module.exports = async (bot, msg) => {
switch (true) {
    case msg.text.startsWith('\/send'):

        const matches = text.match(/\/send(\s+)(.+)(\s+)-(\s+)(.+)/)
        var idd = matches[2];
        var txt = matches[5];
        bot.sendMessage(idd, txt);

    case text.startsWith('\/Del'):

        try {
          const matches = text.match(/\/Del(\s+)(.+)/)
          const nickName = matches[2]
          User.findOneAndRemove({nickName}).then((success) => {
            if (success) {
                bot.sendMessage(msg.chat.id, 'Nick-name deleted')
            }else {
                bot.sendMessage(msg.chat.id, ' Nick-name not found')
            }
          })
        } catch (e) {
          const error = `
          Please type in the correct format
                Example:
                Del "Nick-name to be deleted"
              `
          bot.sendMessage(msg.chat.id, error, {
            reply_to_message_id: msg.message_id
          })
        }
        break

}};