'use strict';
const mongoose = require('mongoose');
const constants = require('./../../configs/constants');
const response = require('./../../app/response');
const Api = mongoose.model('Api');
module.exports = async (req, res, next) => {
    
    try {
        let auth =await Api.findOne({ api_key: req.headers.api });
        if (auth)
            next();
        else {
            throw constants.errors.E_UNAUTHORIZED;
        }
    }
    catch (err) {
        res.send(err);
    }


};