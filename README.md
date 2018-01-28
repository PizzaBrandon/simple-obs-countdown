# simple-obs-countdown

## Installation
```sh
$ npm install -g simple-obs-countdown
```

## Usage
```sh
$ simple-obs-countdown <endtime> <file>
```

- `endtime`: A date string readable by [Date.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
  - Depending on your string format and system environment, you may need to quote this value.
- `file`: A file path to write the countdown output

To use this output in OBS, create a new [Text Source](https://obsproject.com/wiki/Sources-Guide#text-gdi) and select "Read from file". Browse to find the output file you defined above, style the text as desired, and then it can be used as a countdown overlay.
