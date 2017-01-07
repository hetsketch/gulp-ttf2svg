'use strict';

const fs = require('fs');
const assert = require('assert');
const gutil = require('gulp-util');
const ttf2svg = require('../');

it('default test', done => {
  const stream = ttf2svg();

  stream.on('data', file => {
    const fixtures = fs.readFileSync('./test/fixtures/Aller_Lt.svg');
    assert.equal(file.contents.toString(), fixtures.toString());
    done();
  });

  stream.write(new gutil.File({
    path: './test/fixtures/Aller_Lt.ttf',
    contents: fs.readFileSync('./test/fixtures/Aller_Lt.ttf')
  }));

  stream.end();
});