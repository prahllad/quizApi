'use strict';
module.exports = Object.freeze({
    
    E_ERROR: {
        code: 400,
        name: 'E_ERROR',
        err_message: 'Something went wrong.'
    },
    E_UNAUTHORIZED: {
        code: 401,
        name: 'E_UNAUTHORIZED',
        err_message: 'You are unauthorized to access the requested resource'
    },
   
    E_NOT_FOUND: {
        code: 404,
        name: 'E_NOT_FOUND',
        err_message: 'Request not found.'
    },
    E_QUIZ_NOT_FOUND: {
        code: 404,
        name: 'E_QUIZ_NOT_FOUND',
        err_message: 'Quizes not exist.'
    },
   
    
});