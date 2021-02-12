import gulp from "gulp";
import rename from "gulp-rename";
import csso from "gulp-csso";
import sass from "gulp-sass";

// styles

export const styles = () => {
  return gulp.src("src/scss/style.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("src/css"))
}

// Watch

export const watch = () => {
  gulp.watch("src/scss/**/*.scss", gulp.series(styles));
}