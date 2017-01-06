'use strict';

const ttf2svg = require('ttf2svg');
const gutil = require('gulp-util');
const through2 = require('through2').obj;

const PLUGIN_NAME = 'gulp-ttf2svg';

function convertToSvg(options) {
  return through2(function (file, enc, cb) {
    if (file.isNull()) {
      cb(new gutil.PluginError('gulp-example-plugin', 'File is null'));
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-example-plugin', 'Streaming not supported'));
      return;
    }
    try {
      //file.contents is an instance of a Buffer
      let svg = ttf2svg(file.contents);
      //ttf2svg returns String so wrap it into Buffer
      file.contents = new Buffer(svg);
      file.path = gutil.replaceExtension(file.path, '.svg');
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-example-plugin', err));
    }
    cb(null, file);
  })
}

module.exports = convertToSvg;