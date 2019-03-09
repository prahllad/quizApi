'use strict';
const mongoose = require('mongoose');

const constant = require('../../configs/constants');
const quizSchema = mongoose.Schema({
      quizName:{
          type:String,
          default:''
      },
      noOfQuestions:{
          type:Number,
          default:0
      },
      totalweightage:{
          type:Number,
          default:0
      },
      cuttOf:{
          type:Number,
          default:0
      }

}, {
    timestamps: true,
    autoIndex: true
});
quizSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});
const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;