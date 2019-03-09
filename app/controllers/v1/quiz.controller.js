'use strict'
const constants = require('../../../configs/constants');
const response = require('../../response'); 
const quizHelper = require('./../../helpers/quiz.helper');
module.exports = {
    getAllQuiz: async (req, res) => {
        try {
            const quizes = await quizHelper.getQuizes();
            return response.success(res, constants.success.OK, quizes);
        } catch(error) {
            return response.error(res, error);
        }
    },
    getQuestions:async(req,res) =>{
        try{
            const questions = await quizHelper.getQuestions(req.params.quiz);
            return response.success(res,constants.success.OK , questions);
        }catch(error){
            return response.error(res,error);

        }
    },
    submitSolution:async(req,res)=>{
        try{
            const result = await quizHelper.calculate(req.body);
            return response.success(res,constants.success.OK , result);
        }catch(error){
            return response.error(res,error);

        }
    }
}