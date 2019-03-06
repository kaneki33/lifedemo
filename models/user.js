const mongoose = require('mongoose')
mongoose.connect('mongodb://Kaneki:zizo1998@ds217002.mlab.com:17002/nickname&w=1', { useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let Schema = mongoose.Schema

let userSchema = new Schema({
     id: {type:String , required:true},
     nickName: {type:String , required:true}
});




module.exports = mongoose.model('User', userSchema)