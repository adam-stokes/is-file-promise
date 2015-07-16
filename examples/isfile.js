"use strict";

var isFileP = require("..");

isFileP("./package.jsonz").then(function(stat){
    console.log("Found ./package.json: %s", stat);
}).catch(function(err){
    console.log(err);
});
