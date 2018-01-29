'use strict';

const Tap = require('tap');
const describe = Tap.test;

const countdown = require('../bin/countdown');

describe('countdown.', (tap) => {

  tap.test('Rounds up hour', (t) => {
    const interval = countdown.getInterval(100, 60 * 60 * 1000);

    t.match(interval, {
      hour: 1,
      minute: 0,
      second: 0
    });

    t.end();
  });

  tap.test('Rounds up minute', (t) => {
    const interval = countdown.getInterval(100, 60 * 1000);

    t.match(interval, {
      hour: 0,
      minute: 1,
      second: 0
    });

    t.end();
  });

  tap.test('Rounds up second', (t) => {
    const interval = countdown.getInterval(100, 1000);

    t.match(interval, {
      hour: 0,
      minute: 0,
      second: 1
    });

    t.end();
  });

  tap.test('Handles negative', (t) => {
    const interval = countdown.getInterval(1001, 1000);

    t.match(interval, {
      hour: 0,
      minute: 0,
      second: 0
    });

    t.end();
  });

  tap.end();
});
