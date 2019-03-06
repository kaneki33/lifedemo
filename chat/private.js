const User     = require('../models/user')
module.exports = async (bot, msg) => {
    const id = msg.from.id
    
    switch (true) 
        {
        case msg.text != '/start' || !(msg.text.startsWith('Nick')):
        const user = await User.findOne({id}).catch(err => false)
            if (!user) {
                bot.sendMessage(msg.chat.id, `‌‌‎
                Hello 1there, Please enter the name you want to be seen as in the channel....
                in this way... "Nick ur_nickname"
                • This is an irreversible action so please choose well. `)
            } else {
                        life(bot, msg)
            }
            break
      case msg.text == '/start':
        user = await User.findOne({id}).catch(err => false)
       if (!user) {
        bot.sendMessage(msg.chat.id, `‌‌‎Hello 2there, Please enter the name you want to be seen as in the channel....
        in this way... "Nick ur_nickname"
        • This is an irreversible action so please choose well. `)
       } else {
           bot.sendMessage(msg.chat.id, `HEY ${user.nickName}`)
           
       }
      break
      case msg.text.startsWith('Nick'):
        let message = msg.text.split(" ")
            message.splice(0 , 1)
        const nick = message.join(" ")
        const newUser = {
          id: msg.from.id,
          nickName:  nick
          }
        const fUser = await User.findOne({id}).catch(err => false)
        if (fUser) {
          User.findOneAndUpdate({id}, newUser).then(() => {
          bot.sendMessage(msg.chat.id, `Successfully updated ${nick} 😍`)
          })
        }else {
          const user = new User({
                        id: msg.from.id,
                       nickName:  nick
                      }).save(() => {
                      bot.sendMessage(msg.chat.id, `Successfully saved ... welcome ${nick} 😍`)
                    })
        }
      break
    
        default:
        break
        }
    }