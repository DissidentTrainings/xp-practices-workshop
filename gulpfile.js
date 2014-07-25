var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('default', function () {
    return gulp.src('intro.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});



