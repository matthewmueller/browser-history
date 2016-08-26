/**
 * Module dependencies
 */

var { format, parse } = require('url')

/**
 * Export `Browser History`
 */

module.exports = History

/**
 * Initialize `Browser History`
 */

function History (mixed, title, state) {
  return typeof mixed === 'function'
    ? onback(mixed)
    : isInt(mixed)
    ? go(mixed)
    : update(mixed, state)
}

/**
 * Listen for the back button
 */

function onback (fn) {
  window.addEventListener('popstate', function (event) {
    fn(event, fmt(document.location))
  })
}

/**
 * Go
 */

function go (n) {
  window.history.go(n)
}

/**
 * Update
 */

function update (url, title, state) {
  var current = format(document.location)
  var newurl = fmt(url)

  if (current && current === newurl) {
    window.history.replaceState(state, title, newurl)
  } else {
    window.history.pushState(state, title, newurl)
  }
}

/**
 * Format
 */

function fmt (url) {
  var obj = typeof url === 'string' ? parse(url) : url
  return format({
    search: obj.search || undefined,
    hash: obj.hash || undefined,
    pathname: obj.pathname
  })
}

/**
 * Is an integer?
 */

function isInt (value) {
  if (isNaN(value)) return false
  var x = parseFloat(value)
  return (x | 0) === x
}
