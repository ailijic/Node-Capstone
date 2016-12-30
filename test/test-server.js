// test/test-server.js

start()
function start () {
  'use strict'

  const chai = require('chai')
  const chaiHttp = require('chai-http')

  const should = chai.should()
  const expect = chai.expect
  chai.use(chaiHttp)

  const server = require('../server.js')
  const app = server.app

  function checkIfRouteExists (route) {
    chai.request(app)
    .get(route)
    .end((err, res) => {
      expect(err).to.deep.equal(null)
      res.should.have.status(200)
      res.should.be.html
      this.done()
    })
  }
  describe('index page', function () {
    it('exists', function (done) {
      checkIfRouteExists.call({done}, '/');
    })
  })

  describe('login page', function () {
    it('exists', function (done) {
      checkIfRouteExists.call({done}, '/login')
    })
  }) 
}

