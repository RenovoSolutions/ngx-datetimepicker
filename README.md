# ngx-datetimepicker
## Date time picker that falls back to native HTML5 components on mobile

* No jQuery or other external dependencies.
* 3 seperate components for Date Time, Date, and Time picker
* When being used on a mobile or touch devices it falls back to html5 inputs of date, datetime-local, and time

[![npm](https://img.shields.io/npm/v/ngx-datetimepicker.svg)](https://www.npmjs.com/package/ngx-datetimepicker)
[![npm](https://img.shields.io/npm/dt/ngx-datetimepicker.svg?label=npm%20downloads)](https://www.npmjs.com/package/ngx-datetimepicker)

## [Codepen Demo](http://codepen.io/BrentWMiller/pen/gmOGmz)

## Development:

### Work flow

* Clone repository to your machine.
* Run `npm run setup` to prepare the  project
* Live edit mode with `npm run serve`.
* Run tests with watcher with `npm run test`.
* Prepare for distrabution with `npm run dist` (note you man need to also run `tsc index.ts` if you have updated the exported values.)
* Test a demo project using the exported ngModule with `npm run demo`
* Sass files are compiled locally using [Koala](http://koala-app.com/).
* Set Koala to watch `date.component.scss` and compile it to `ngx-datetimepicker > src > assets` as `date.component.css`.

### Requirements

* angular-cli 1.0.0-beta.28.3 or higher
* node 6.9.0 or higher

### Contributors

[<img alt="TheOriginalJosh" src="https://avatars.githubusercontent.com/u/1486275?v=3&s=117" width="117">](https://github.com/TheOriginalJosh) | [<img alt="BrentWMiller" src="https://avatars.githubusercontent.com/u/13574057?v=3&s=117" width="117">](https://github.com/BrentWMiller)| [<img alt="SFarageNIS" src="https://avatars.githubusercontent.com/u/1518056?v=3&s=117" width="117">](https://github.com/SFarageNIS)
:---: |:---: |:---: |
[Josh Sommer](https://github.com/TheOriginalJosh) |[Brent Miller](https://github.com/BrentWMiller) |[Steven Farage](https://github.com/SFarageNIS)
