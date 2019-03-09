'use strict';
module.exports = (res, success, data) => {
    let obj = data['type']? data['type']:'Report';
    delete data['type'];
    return res.status(success.code || 200).send({ [obj]: data });
};