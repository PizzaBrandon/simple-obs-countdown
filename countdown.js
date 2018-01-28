#!/usr/bin/env node

const fs = require('fs');
const package = require('./package.json');

const program = require('commander');

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

program
  .version(package.version, '-v, --version');

program
  .command('countdown <end> <file>')
  .alias('cd')
  .description('Write countdown clock until time to the given file')
  .action(action);

function getInterval(start, end) {
  let range = end - start;

  const interval = {
    range
  };

  const millis = Math.floor(range / 1000);
  if (millis <= 0) {
    range = 0;
  } else {
    range = Math.floor(range / 1000) + 1;
  }

  interval.hour = Math.floor(range / HOUR);
  range %= HOUR;

  interval.minute = Math.floor(range / MINUTE);
  range %= MINUTE;

  interval.second = range

  return interval;
}

function action(end, file) {
  console.log(end);
  console.log(file);

  console.log(`Counting down until ${ end }`);

  const endTime = new Date(end).getTime();

  let timeString = '';

  const writeFile = () => {
    return Promise.resolve().then(() => {
      console.log(timeString);
    });
  };

  const update = () => {

    const interval = getInterval(Date.now(), endTime);

    if (interval.range <= 0) {
      timeString = '0:00';
      return writeFile()
      .then(() => new Promise((res) => setTimeout(res, 1000)))
      .then(() => {
        timeString = '';
        return writeFile();
      })
      .then(() => {
        console.log('Countdown complete');
        process.exit(0);
      });
    }

    const newString = `${ interval.minute }:${ ('0' + interval.second).slice(-2) }`;
    if (newString !== timeString) {
      timeString = newString;
      console.log(interval);
      return writeFile().then(() => setTimeout(update, SECOND/60));
    }

    setTimeout(update, SECOND / 60);
  };

  update();
}


program.parse(process.argv);
