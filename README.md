# Rocketdown

> Countdown to launch!

Boost the awesomeness of your node rocket with a spoken countdown launcher.

```shell
npm i -S rocketdown
```

## Usage

```js
var rocketdown = require('rocketdown');

rocketdown(5, function () {
  console.log('done!');
});
```

`rocketdown` takes a number `<= 5` and invokes a callback when it's done.

## License

MIT
