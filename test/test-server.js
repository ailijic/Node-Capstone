// test/test-server.js

start()
function start () {
  'use strict'

  const chai = require('chai')
  const chaiHttp = require('chai-http')
  const server = require('../server/server.js')

  const should = chai.should()
  const expect = chai.expect
  const app = server.app
  const storage = server.storage

  chai.use(chaiHttp)

  describe('index page', function () {
    /*
    before(function (done) {
      server.runServer(function () {
        return done()
      })
    })
    */

    it('exists', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(err).to.deep.equal(null)
          res.should.have.status(200)
          res.should.be.html
          done()
        })
    })
  })
}

