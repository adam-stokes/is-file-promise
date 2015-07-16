/* global describe it */

"use strict";
var isFileP = require("..");

require("should");

describe("node module", function() {
    it("should catch errors", function(done){
        isFileP("/aadfffdsafda").catch(function(err){
            err.should.be.an.instanceOf(Error);
            done();
        });
    });
});
