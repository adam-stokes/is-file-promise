"use strict";

var Promise = require("native-or-bluebird");
var isFile = require("is-file");

module.exports = function(path){
    return new Promise(function(_resolve, _reject){
        isFile(path, function(err, stats){
            return err === null ? _resolve(stats) : _reject(err);
        });
    });
};
