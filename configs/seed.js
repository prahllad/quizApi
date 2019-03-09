'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const quiz =  mongoose.model('Quiz');
const Api = new mongoose.model('Api')();
const question = new mongoose.model('Question')();
const _ = require('lodash');
const crypto = require('crypto');

const seed = {
    dropAllCollections: async () => {
        try {
            await mongoose.connection.dropDatabase();
        } catch (err) {
            console.error('%%%%%%%%%%%%%%%%%%: ', err);
        }
    },
    dropCollection: (collection) => {
        mongoose.connection.collections[collection].drop();
    },
    seedAllCollection: async () => {
        try {
           
            // quiz['quizName'] = "Quiz2";
            // quiz['noOfQuestions'] = 6;
            // quiz['totalweightage'] = 60;
            // quiz['cuttOf'] = 30;
            // let res = await quiz.save();

            // let  rand = crypto.randomBytes(10).toString('hex');
            // const hmac = crypto.createHmac('sha256', rand);
            // hmac.update(res.id);
            // var data = hmac.digest('hex');
            // Api['api_key'] = data.slice(0, 30);
            // await Api.save();
            let res = await quiz.find({}).select('_id');
            question['quizId'] = res[1]._id;
            question['question'] = 'Sample question 1 from quiz2';
            question['options'] = ['A','B','C','D','E'];
            question['answer'] = ['D','C'];
            question['weightage'] = 10;
           await question.save();
            
        }
        catch (error) {
            console.log(error);
        }


    },
    seedCollection: (collection) => {

    }
};
module.exports = seed;