var gulp = require('gulp');
var config = require('../config').images;

gulp.task('images', function() {
	console.log('Doing images');
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
