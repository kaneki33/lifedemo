const Bot     = require('node-telegram-bot-api');
const User     = require('./models/user')
const private = require('./chat/private')
const life     = require('./features/life')
const token   = '776839207:AAGPOS9RH1n0fFwqhp-W7xfTUGVXdUVaXRY'
const id = msg.from.id
// process.env.TOKEN
let bot
if (process.env.NODE_ENV === 'production') {
  bot = new Bot(token)
  bot.setWebHook(process.env.HEROKU_URL + bot.token)
} else {
bot = new Bot(token, {
  polling: true
})
}
console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode')
bot.sendMessage(737446966,"The bot is online")


bot.on('message', (msg) => {
  
       private(bot, msg)
     });

     bot.on('message', async (msg) => {

            user = await User.findOne({id}).catch(err => false)
            if(msg.text.startsWith('Nic'))
              {
                          let message = msg.text.split(" ")
                          message.splice(0 , 1)
                      const nick = message.join(" ")
                      const newUser = {
                        id: msg.from.id,
                        nickName:  nick
                        }

                      User.findOneAndUpdate({id}, newUser).then(() => {
                      bot.sendMessage(msg.chat.id, `Successfully updated ${nick} 😍`)
                      })
            }
            else
            {
                    
                      
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
                    
            }
          }); 
        
 module.exports = bot