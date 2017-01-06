# gulp-ttf2svg
Gulp plugin converts font from TTF format to SVG

##Usage
```shell
npm install --save-dev gulp-ttf2svg
```
```javascript
const ttf2svg = require('ttf2svg');
gulp.src('path/to/ttfs')
  .pipe(ttf2svg())
  .pipe(gulp.dest('path/to/save');
```

