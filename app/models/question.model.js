const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Quiz Schema
const QuestionSchema = new Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },

    question: {
        type: String,
        default: '',
        unique: true
    },
    options: {
        type: Array,
        default: []
    },
    answer: {
        type: Array,
        default: []
    },
    weightage:{
        type:Number,
        default:0

    }
})

module.exports = mongoose.model('Question', QuestionSchema)
