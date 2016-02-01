/* global describe it */

"use strict";
var isFileP = require("..");

require("should");

describe("node module", function() {
  it("should send back true for files", function(done) {
    isFileP(__filename).then(function(bool) {
      bool.should.be.true;
      done();
    });
  });
  it("should catch errors", function(done) {
    isFileP("/aadfffdsafda").catch(function(err) {
      err.should.be.an.instanceOf(Error);
      done();
    });
  });
});
