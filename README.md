# ngx-datetime-picker

## Date time picker that falls back to native HTML5 components on mobile

![image](https://cloud.githubusercontent.com/assets/13574057/24919884/1d00adac-1eb3-11e7-85b6-d221058d0b03.png)

- No jQuery or other external dependencies.
- 3 seperate components for Date Time, Date, and Time picker
- When being used on a mobile or touch devices it falls back to html5 inputs of date, datetime-local, and time

[![npm](https://img.shields.io/npm/v/ngx-datetime-picker.svg)](https://www.npmjs.com/package/ngx-datetime-picker)
[![npm](https://img.shields.io/npm/dt/ngx-datetime-picker.svg?label=npm%20downloads)](https://www.npmjs.com/package/ngx-datetime-picker)

## [Live Demo](https://renovosolutions.github.io/ngx-datetimepicker/)

## Usage

```typescript
import { DateTimePickerModule} from 'ngx-datetime-picker';

@NgModule({
  imports: [
    DateTimePickerModule
  ],
```

```html
<ngx-datetime-picker
  [(selectedDateTime)]="dateTimeExample"
></ngx-datetime-picker>

<ngx-date-picker [(selectedDate)]="dateExample"></ngx-date-picker>

<ngx-time-picker [(selectedTime)]="timeExample"></ngx-time-picker>

Additional options for each picker: [disableButton]="false" (default)
[disableInput]="false" (default) [disablePicker]="false" (default)
[doNotCloseOnDateSet]="false" (default) Additional options for ngx-date-picker
and ngx-datetime-picker: [min]="null" (default) [max]="null" (default)
Additional options for ngx-time-picker and ngx-datetime-picker:
[use24HourClock]="false" (default)
```

## CSS

Copy the [ngx-datetime-picker](/scss/ngx-datetime-picker.css) css to your project.

_If_ you are using angular-cli the css can be added to your angular-cli.json

```typescript
"styles": [
  "../node_modules/ngx-datetime-picker/ngx-datetime-picker.css"
]
```

[Sass files](/scss/) avaliable for quick customization. Override the defaults, compile, and include them in your project.

## Development:

### Work flow

- Clone repository to your machine.
- Run `npm run setup` to prepare the project
- Live edit mode with `npm run serve`.
- Run tests with watcher with `npm run test`.
- Run tests without a watcher with `npm run test.once`.
- Prepare for distrabution with `npm run dist` (note you man need to also run `tsc index.ts` if you have updated the exported values.)
- Test a demo project using the exported ngModule with `npm run demo`
- Sass files are compiled locally using [Koala](http://koala-app.com/).
- Set Koala to watch `date.component.scss` and compile it to `ngx-datetimepicker > src > assets` as `ngx-datetime-picker.css`.

- _Optionally_ you can use https://github.com/angular-buch/angular-cli-ghpages to publish the demo install to github pages. by first running `npm run demo`, then by going into your demo directory with `cd demo` and from there you can copy and past the two commands to publish to github pages.
  ```
  ng build --prod --aot --base-href "https://renovosolutions.github.io/ngx-datetimepicker/"
  ```
  then
  ```
  ngh --repo=https://github.com/renovosolutions/ngx-datetimepicker.git
  ```
  _note this will publish to the `gh-pages` branch and you wil need to authenicate again_

### Requirements

- angular-cli 1.0.0-beta.28.3 or higher
- node 6.9.0 or higher

### Contributors

| [<img alt="JoshDSommer" src="https://avatars.githubusercontent.com/u/1486275?v=3&s=117" width="117">](https://github.com/JoshDSommer) | [<img alt="BrentWMiller" src="https://avatars.githubusercontent.com/u/13574057?v=3&s=117" width="117">](https://github.com/BrentWMiller) | [<img alt="SFarageNIS" src="https://avatars.githubusercontent.com/u/1518056?v=3&s=117" width="117">](https://github.com/SFarageNIS) | [<img alt="Marco Mantovani" src="https://avatars.githubusercontent.com/u/3605680?v=3&s=117" width="117">](https://github.com/TheLand) | [<img alt="Jojie Palahang" src="https://avatars.githubusercontent.com/u/19182512?v=3&s=117" width="117">](https://github.com/JojiePalahang) | [<img alt="Sam Graber" src="https://avatars.githubusercontent.com/u/6878589?v=3" width="117">](https://github.com/SamGraber) | [<img alt="alecrem" src="https://avatars.githubusercontent.com/u/685555?&v=3=117" width="117">](https://github.com/alecrem) | [<img alt="jrquick17" src="https://avatars.githubusercontent.com/u/7435558?&v=3=117" width="117">](https://github.com/jrquiick17) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                             [Josh Sommer](https://github.com/JoshDSommer)                                             |                                             [Brent Miller](https://github.com/BrentWMiller)                                              |                                           [Steven Farage](https://github.com/SFarageNIS)                                            |                                             [Marco Mantovani](https://github.com/TheLand)                                             |                                             [Jojie Palahang](https://github.com/JojiePalahang)                                              |                                          [Sam Graber](https://github.com/SamGraber)                                          |                                      [Alejandro Cremades](https://github.com/alecrem)                                       |                                      [Jeremy Quick](https://github.com/jrquick17)                                                   |
|                                                                                                                                       |                                                                                                                                          |                                                                                                                                     |                                                                                                                                       |                                                                                                                                             |                                                                                                                              |                                                                                                                             |                                            [Personal](https://jrquick.com)                                                        |
