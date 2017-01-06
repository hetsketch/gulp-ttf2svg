# gulp-ttf2svg
Gulp plugin converts font from TTF format to SVG

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

