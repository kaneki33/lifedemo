const User     = require('../models/user')
module.exports = async (bot, msg) => {
    const id = msg.from.id
    switch (true) 
        {
            
    case msg.text.startsWith('Nick'):
                const fUser = await User.findOne({id}).catch(err => false)
        if (fUser) 
        {
          break
        }
        else 
        {
            let message = msg.text.split(" ")
            message.splice(0 , 1)
        const nick = message.join(" ")
          const user = new User({
                        id: msg.from.id,
                       nickName:  nick
                      }).save(() => {
                      bot.sendMessage(msg.chat.id, `Successfully saved ... welcome ${nick} 😍`)
                    });
        }
      break
    case msg.text != '' :
        user = await User.findOne({id}).catch(err => false)
       if (!user )
            {
                bot.sendMessage(msg.chat.id, `‌‌‎Hello there, Please enter the name you want to be seen as in the channel....
                in this way... "Nick ur_nickname"
                • This is an irreversible action so please choose well. `)
            } 
            
    
        default:
        break
        }
    }
