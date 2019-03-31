const User     = require('../models/user')
const admin = require('./admin')
module.exports = async (bot, msg) => {
const id = msg.from.id
const channel = '@DOLLARS_S';
const adminid = 737446966;
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
            if(/^[a-zA-Z0-9]*$/.test(nick) == false)
            {
                bot.sendMessage(msg.chat.id, `Your nick name can not contain special characters!\nTry again!`)
            }
            else
            {
                if(/[A-z]/.test(nick) == true)
                {
                const user = new User({
                    id: msg.from.id,
                    nickName:  nick
                    }).save(() =>{
                              bot.sendMessage(msg.chat.id, `Successfully saved ... welcome ${nick} 😍`)
                              bot.sendMessage(msg.chat.id, `Say Anything .. Have fun!\n${channel}`)
                        });
                    bot.sendMessage(adminid, `( ${nick} ) joined .. @${msg.from.username} ,${msg.from.first_name} ${msg.from.last_name} `);
                    bot.sendMessage(channel, `( ${nick} ) joined us .. Welcome ${nick} `);
                 }
                else
                {
                    bot.sendMessage(msg.chat.id, `Your Nick name must contain a letter!\nTry again!`)
                }
            }
        }
        break
    case msg.text != '' :
                user = await User.findOne({id}).catch(err => false)
                if (!user ){
                    bot.sendMessage(msg.chat.id, `‌‌‎Hello there🤗🤗, please enter the name you want to be seen with in the #channel....

        👉This way (  Nick X   ) WITHOUT THE BRACKETS.👈 
        ("X" is your Nickname)
        ‼️This is an irreversible action‼️

        So please choose well. 

        Thank you😊😊`)
                bot.sendMessage(msg.chat.id, `‌‌Nickname ስትመርጡ መጀመርያ Nick ብላቹ ጽፋቹ ከዛ ምትፈልጉትን ስም መርጣቹ ትጽፋላቹ!!!
        ለምሳሌ: Nick Ken 
        "Ken" ሚለው nickname ነው፡፡`);
                } 
                case (msg.from.id == '737446966' || msg.from.id == '343675433'):
        admin(bot, msg)
        break
    default:
        break
    }
}
