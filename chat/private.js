const User     = require('../models/user')
const life     = require('../features/life')
module.exports = async (bot, msg) => {
    const id = msg.from.id
    const not = msg.text.startsWith('Nick')
    switch (true) 
        {
    case msg.text.startsWith('Nick'):
        let message = msg.text.split(" ")
            message.splice(0 , 1)
        const nick = message.join(" ")
        const newUser = {
          id: msg.from.id,
          nickName:  nick
          }
        const fUser = await User.findOne({id}).catch(err => false)
        if (fUser) 
        {
          User.findOneAndUpdate({id}, newUser).then(() => {
          bot.sendMessage(msg.chat.id, `Successfully updated ${nick} 😍`)
          })
        }else 
        {
          const user = new User({
                        id: msg.from.id,
                       nickName:  nick
                      }).save(() => {
                      bot.sendMessage(msg.chat.id, `Successfully saved ... welcome ${nick} 😍`)
                    })
        }
      break
    case msg.text != '' && (!not):
        user = await User.findOne({id}).catch(err => false)
       if (!user) 
       {
        bot.sendMessage(msg.chat.id, `‌‌‎Hello there, Please enter the name you want to be seen as in the channel....
        in this way... "Nick ur_nickname"
        • This is an irreversible action so please choose well. `)
       } 
       else 
       {
        life(bot, msg)
       }
      break
      
    
        default:
        break
        }
    }