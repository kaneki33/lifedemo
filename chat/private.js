const User     = require('../models/user')
module.exports = async (bot, msg) => {
    const id = msg.from.id
    const channel = '@tryyyyyyyyyy';
    const admin = 737446966;
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
                      bot.sendMessage(msg.chat.id, `Say Hi `)
                    });
                    bot.sendMessage(admin, `${nick} joined us say hello guys .. Welcome ${nick} `);

        }
      break
    case msg.text != '' :
        user = await User.findOne({id}).catch(err => false)
       if (!user )
            {
                bot.sendMessage(msg.chat.id, `‌‌‎Hello there🤗🤗, please enter the name you want to be seen as in the #channel....
                                            👉This way "Nick yournickname".👈
                                            This is an irreversible action‼️
                                            So please choose well. 
                                            Thank you😊😊`)
            } 
            
    
        default:
        break
        }
    }
