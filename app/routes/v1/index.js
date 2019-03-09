'use strict';
const express = require('express');
const router = express.Router();
const configRoute = require('./../config-route');
module.exports = function () {
    router.use(function (req, res, next) {
        res._json = res.json;
        res.json = function (obj) {

            res._json(obj);
        };
        next();
    });
    configRoute(router, [
        require('./app.route')
    ]);
    return router;
};
