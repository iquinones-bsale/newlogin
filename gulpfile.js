var gulp = require('gulp');
var sass = require('gulp-sass');


//para ejecutar sass correr gulp sass en la consola

gulp.task('sass',function(){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))    
});