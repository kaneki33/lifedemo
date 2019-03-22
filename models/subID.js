const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.connect('mongodb://kaneki:ken1998@ds217002.mlab.com:17002/nickname?authSource=nickname&w=1&w=1', { useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let Schema = mongoose.Schema

let SubIDSchema = new Schema({
     id: {type:String , required:true},
     Firstname: {type:String , required:true}

});

module.exports = mongoose.model('SubID', SubIDSchema)