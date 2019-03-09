const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApiSchema = new Schema({
   userType:{
       type:String,
       default:'Admin'
   },
   api_key:{
       type:String,
       default:null
   }
});

module.exports = mongoose.model('Api', ApiSchema)
