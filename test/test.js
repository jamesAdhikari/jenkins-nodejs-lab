var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with nodejs-lab', function(done) {
    request(app).get('/').expect('this page is maintain by kp adhikari from ohio', done);
  });
});
