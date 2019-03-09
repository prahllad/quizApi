'use strict';
const mongoose = require('mongoose');
const constant = require('../../configs/constants');
const Quiz = mongoose.model('Quiz');
const Questions = mongoose.model('Question');
const self = module.exports = {
    async getQuizes(data) {
        const quizes = await Quiz.find({}).lean();
        if (quizes) {
            let data = {};
            data['type'] = 'Quizes';
            quizes.forEach((element, index) => {

                data['quiz' + index] = element;
            });
            return data;
        }
        throw constant.errors.E_QUIZ_NOT_FOUND;
    },
    async getQuestions(quizid, query = null) {
        if (!query) {
            query = 'question options weightage';
        }
        let questions = await Questions.find({ quizId: quizid }).select(query);
        if (questions) {
            let data = {};
            data['type'] = 'Questions';
            questions.forEach((element, index) => {
                if (!element.answer) element['answer'] = [];
                data[index + 1] = element;
            });
            data['quizId'] = quizid;
            return data;
        }
        throw constant.errors.E_QUIZ_NOT_FOUND;
    },
    async calculate(data) {
        try{
        if (data.Questions && data.Questions.quizId) {
            let answers = await self.getQuestions(data.Questions.quizId, 'answer weightage');
            delete data.Questions.quizId;
            let total = 0;
            let answeredQuestion = 0;
            let wrong = 0;
            for (let prop in data.Questions) {
                if (data.Questions[prop].answer.join("") !== '' && (data.Questions[prop].answer.join("") === answers[prop].answer.join(""))) {
                    total = total + answers[prop].weightage;
                    data.Questions[prop]['status'] = 'correct';
                    answeredQuestion += 1;

                }
                else if (data.Questions[prop].answer.join("") !== '' && (data.Questions[prop].answer.join("") !== answers[prop].answer.join(""))) {
                    total = total - (1 / 4) * answers[prop].weightage;
                    data.Questions[prop]['status'] = 'InCorrect';
                    data.Questions[prop]['Submitted Answer'] = data.Questions[prop].answer;
                    data.Questions[prop].answer = answers[prop].answer;
                    answeredQuestion += 1;
                    wrong += 1;

                }


            }
            data.Questions['answeredQuestion'] = answeredQuestion;
            data.Questions['wrongAnswred'] = wrong;
            data.Questions['toTalscore'] = total;
            return data.Questions;
       }
        throw constant.errors.E_QUIZ_NOT_FOUND;
    } catch(err){
        console.log(err);
    }

    }



};
