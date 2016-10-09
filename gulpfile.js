/**
 * Created by Ivan on 09.10.2016.
 */
var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    modal = require("../postcss-modal");

gulp.task("css", function() {
    return gulp.src("src/style.css")
        .pipe(postcss([modal]))
        .pipe(gulp.dest("build/"));
});

gulp.task("default", ["css"]);