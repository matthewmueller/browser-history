/**
 * Module Dependencies
 */

const history = require('./src/history')
const assert = require('assert')

/**
 * Tests
 */

describe('history', function () {
  it('should go to urls', function (done) {
    history('/hi')
    assert.equal(document.location.pathname, '/hi')
    history('/hi/test')
    assert.equal(document.location.pathname, '/hi/test')
    history(function (e, url) {
      assert.equal(url, '/hi')
      done()
    })
    history(-1)
  })
})
