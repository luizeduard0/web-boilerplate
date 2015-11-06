const gulp = require('gulp');
const browserify = require('browserify');
const fs = require('fs');

gulp.task('build', () => {
  return browserify('./src/index.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
    .transform({ global: true }, 'uglifyify')
    .bundle()
    .on('error', error => console.error(error.message))
    .pipe(fs.createWriteStream('./public/bundle.js'));
});

gulp.task('build-dev', () => {
  return browserify('./src/index.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', error => console.error(error.message))
    .pipe(fs.createWriteStream('./public/bundle.js'));
});

gulp.task('watch', () => {
  return gulp.watch('./src/**/*', ['build-dev']);
});
