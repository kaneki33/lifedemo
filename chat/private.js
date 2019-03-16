const User     = require('../models/user')
module.exports = async (bot, msg) => {
const id = msg.from.id
const channel = '@tryyyyyyyyyy';
const admin = 737446966;
switch (true){        
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
           // if(nick.includes(['1','2','3','4','5','6','7','8','9','',' ','.','@','(',')','#','!','-','=','*','-']))
            if( (/\d/.test(nick) && /\w/.test(nick)) || /[A-z]/.test(nick))
            {
                const user = new User({
                    id: msg.from.id,
                    nickName:  nick
                    }).save(() => {
                              bot.sendMessage(msg.chat.id, `Successfully saved ... welcome ${nick} 😍`)
                              bot.sendMessage(msg.chat.id, `Say Anything .. Have fun!\n${channel}`)
                        });
                    bot.sendMessage(admin, `( ${nick} ) joined .. @${msg.from.username} ,${msg.from.first_name} ${msg.from.last_name} `);
                    //bot.sendMessage(channel, `( ${nick} ) joined us .. Welcome ${nick} `);
            }
            else if(/\W/.test(nick))
            {
                bot.sendMessage(msg.chat.id, `Your nick name can not only be numbers!\nTry again!`)
            }
        }
        break
    case msg.text != '' :
        user = await User.findOne({id}).catch(err => false)
        if (!user ){
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
