# gulp-ttf2svg
Gulp plugin converts font from TTF format to SVG

[![Build Status](https://travis-ci.org/hetsketch/gulp-ttf2svg.svg?branch=master)](https://travis-ci.org/hetsketch/gulp-ttf2svg)

##Usage
```shell
npm install --save-dev gulp-ttf-svg
```
```javascript
const ttf2svg = require('gulp-ttf-svg');
gulp.src('path/to/ttfs')
  .pipe(ttf2svg())
  .pipe(gulp.dest('path/to/save');
```

