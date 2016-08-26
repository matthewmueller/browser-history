# browser-history

simple functional wrapper around the browser history API

## Install

```bash
npm install browser-history
```

## Documentation

### Go to a path

```js
var history = require('browser-history')
history('/users')
```

### Listen for the back button

```js
var history = require('browser-history')
history(function (e, url) {
  // do something with the URL
})
```

### Go back

```js
var history = require('browser-history')
history(-1)
```

## Test

```bash
npm test
```

## License

MIT
