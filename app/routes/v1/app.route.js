'use strict';
const isAuthenticated = require('../../../configs/middlewares/is-authenticated');
const quizController = require('./../../controllers/v1/quiz.controller');
const seed = require('../../../configs/seed');
const PROTECTED = [
    { type: 'GET', path: '/get_quiz', handlers: [isAuthenticated,quizController.getAllQuiz ] },
    { type: 'GET', path:'/get_question/:quiz',handlers:[isAuthenticated ,quizController.getQuestions]},
    { type: 'POST', path:'/submit/solution' , handlers:[isAuthenticated, quizController.submitSolution]}
   


    
];
const PUBLIC = [];
module.exports = {
    PROTECTED,
    PUBLIC
}