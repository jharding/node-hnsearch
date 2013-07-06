/** 
 * Tests for HNSearch Client
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/) 
 */

var hnsearch = require('..')
  , should = require('should');

describe('hnsearch.submissions()', function() {
  it('should successfully search Hacker News submissions.', function (done) {

    hnsearch.submissions({ q: 'javascript' }, function(err, response) {
      should.exist(response);
      should.exist(response.results);
      response.results.should.not.be.empty;
      done();
    });
  });
});

describe('hnsearch.comments()', function() {
  it('should successfully search Hacker News comments.', function (done) {

    hnsearch.submissions({ q: 'javascript' }, function(err, response) {
      should.exist(response);
      should.exist(response.results);
      response.results.should.not.be.empty;
      done();
    });
  });
});

describe('hnsearch.users()', function() {
  it('should successfully search Hacker News users.', function (done) {

    hnsearch.submissions({ q: 'pg' }, function(err, response) {
      should.exist(response);
      should.exist(response.results);
      response.results.should.not.be.empty;
      done();
    });
  });
});