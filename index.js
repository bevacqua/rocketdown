'use strict';

var path = require('path');
var play = require('play');

module.exports = function rocketdown (count, done) {
  if (count > 5) {
    throw new Error('Rocketdown can only count to five. It\'s that stupid.');
  }
  if (count < 1) {
    throw new Error('Rocketdown needs a non-zero positive integer!');
  }

  sound(count--);

  var timer = setInterval(next, 1000);

  function next () {
    if (count >= 0) {
      sound(count--);
    } else {
      clearTimeout(timer);
      done();
    }
  }
};

function sound (number) {
  var file = path.join(__dirname, 'resources', number + '.mp3');
  play.sound(file);
}
