> [!NOTE]  
> This project is no longer actively maintained.
>
> We want to thank everyone for their contributions and hope we've helped you in your coding journey.

# ngx-datetime-picker

- No jQuery or other external dependencies
- Three separate components for Date Time, Date, and Time picker
- When being used on a mobile or touch devices, it falls back to HTML5 inputs of date, datetime-local, and time

[![npm](https://img.shields.io/npm/v/ngx-datetime-picker.svg)](https://www.npmjs.com/package/ngx-datetime-picker)
[![npm](https://img.shields.io/npm/dt/ngx-datetime-picker.svg?label=npm%20downloads)](https://www.npmjs.com/package/ngx-datetime-picker)

## Demo

Live demo can be found at <https://renovosolutions.github.io/ngx-datetimepicker/>.

<p align="center">
  <p align="center">
      <img src="https://cloud.githubusercontent.com/assets/13574057/24919884/1d00adac-1eb3-11e7-85b6-d221058d0b03.png">
  </p>
  <p align="center">
    Date time picker that falls back to native HTML5 components on mobile
  </p>
</p>

## DateTime formats

Date formats are called at `datePicker.component.ts` - functions `formattedDate()` and `mobileFormattedDate()`.

Time formats are called at `timePicker.component.ts` - functions `formattedTime()` and `mobileFormattedTime()`.

DateTime formats are called at `dateTimePicker.component.ts` - functions `formattedDate()` and `mobileFormattedDate()`.

Change these calls to a different format to get different results.
All formats are defined in [`date.service.ts`](/src/services/date.service.ts).

## Usage

```typescript
import { DateTimePickerModule} from 'ngx-datetime-picker';

@NgModule({
  imports: [
    DateTimePickerModule
  ],
```

```html
<ngx-datetime-picker [(selectedDateTime)]="dateTimeExample"></ngx-datetime-picker>

<ngx-date-picker [(selectedDate)]="dateExample"></ngx-date-picker>

<ngx-time-picker [(selectedTime)]="timeExample"></ngx-time-picker>
```

Additional options for each picker:

- `[disableButton]="false" (default)`
- `[disableInput]="false" (default)`
- `[disablePicker]="false" (default)`
- `[doNotCloseOnDateSet]="false" (default)`

Additional options for `ngx-date-picker` and `ngx-datetime-picker`:

- `[min]="null" (default)`
- `[max]="null" (default)`

Additional options for `ngx-time-picker` and `ngx-datetime-picker`:

- `[use24HourClock]="false" (default)`

## CSS

Compile `ngx-datetime-picker.css` from SCSS and copy into to your project.

If you are using angular-cli, the css can be added to your `angular-cli.json`:

```typescript
"styles": [
  "../node_modules/ngx-datetime-picker/ngx-datetime-picker.css"
]
```

[SCSS files](/src/scss/) available for quick customization. Override the defaults, compile, and include them in your project.

## Development:

### Work flow

- Clone repository to your machine.
- Run `npm run setup` to prepare the project.
- Live edit mode with `npm run serve`.
- Run tests with watcher with `npm run test`.
- Run tests without a watcher with `npm run test.once`.
- Prepare for distribution with `npm run dist`. (Note: you may need to also run `tsc index.ts` if you have updated the exported values)
- Test a demo project using the exported ngModule with `npm run demo`.
- Sass files are compiled locally using [Koala](http://koala-app.com/).
- Set Koala to watch `date.component.scss` and compile it to `ngx-datetimepicker > src > assets` as `ngx-datetime-picker.css`.

- _Optionally_, you can use <https://github.com/angular-buch/angular-cli-ghpages> to publish the demo install to github pages. First run `npm run demo`, then switch into your demo directory with `cd demo`. From there, you can copy and paste the two commands to publish to github pages:

  ```shell
  ng build --prod --aot --base-href "https://renovosolutions.github.io/ngx-datetimepicker/"

  ngh --repo=https://github.com/renovosolutions/ngx-datetimepicker.git
  ```

  _Note: this will publish to the `gh-pages` branch and you wil need to authenticate again._

### Requirements

- angular-cli 12.2.16 or higher, known issues with version 13
- node 10 or higher

### Contributors

| [<img alt="JoshDSommer" src="https://avatars.githubusercontent.com/u/1486275?v=3&s=117" width="117">](https://github.com/JoshDSommer) | [<img alt="BrentWMiller" src="https://avatars.githubusercontent.com/u/13574057?v=3&s=117" width="117">](https://github.com/BrentWMiller) | [<img alt="benjamin-a-kuntz" src="https://avatars.githubusercontent.com/u/98501411?v=3&s=117" width="117">](https://github.com/benjamin-a-kuntz) | [<img alt="SFarageNIS" src="https://avatars.githubusercontent.com/u/1518056?v=3&s=117" width="117">](https://github.com/SFarageNIS) | [<img alt="Marco Mantovani" src="https://avatars.githubusercontent.com/u/3605680?v=3&s=117" width="117">](https://github.com/TheLand) | [<img alt="Jojie Palahang" src="https://avatars.githubusercontent.com/u/19182512?v=3&s=117" width="117">](https://github.com/JojiePalahang) | [<img alt="Sam Graber" src="https://avatars.githubusercontent.com/u/6878589?v=3" width="117">](https://github.com/SamGraber) | [<img alt="alecrem" src="https://avatars.githubusercontent.com/u/685555?&v=3=117" width="117">](https://github.com/alecrem) | [<img alt="jrquick17" src="https://avatars.githubusercontent.com/u/7435558?&v=3=117" width="117">](https://github.com/jrquiick17) |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|                                             [Josh Sommer](https://github.com/JoshDSommer)                                             |                                             [Brent Miller](https://github.com/BrentWMiller)                                              |                                               [Benjamin Kuntz](https://github.com/benjamin-a-kuntz)                                              |                                           [Steven Farage](https://github.com/SFarageNIS)                                            |                                             [Marco Mantovani](https://github.com/TheLand)                                             |                                             [Jojie Palahang](https://github.com/JojiePalahang)                                              |                                          [Sam Graber](https://github.com/SamGraber)                                          |                                      [Alejandro Cremades](https://github.com/alecrem)                                       |                                      [Jeremy Quick](https://github.com/jrquick17)                                                 |
|                                                                                                                                       |                                                                                                                                          |                                                                                                                                                  |                                                                                                                                     |                                                                                                                                       |                                                                                                                                             |                                                                                                                              |                                                                                                                             |                                            [Personal](https://jrquick.com)                                                        |
