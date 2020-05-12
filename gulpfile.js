var gulp = require("gulp");
var cssConcat = require("gulp-concat-css");
var cssMinify = require("gulp-minify");
var terser = require("gulp-terser");
var imgOpt = require("gulp-imagemin");
var browserSync = require("browser-sync").create();

gulp.task("serve", () => {
    browserSync.init({
        server:{
            baseDir: "./dev/dist"
        }
    });
    gulp.watch("./dev/**").on("change",browserSync.reload);
});

gulp.task("css", () => {
    return gulp.src("./dev/styles_raw/**/*.css")
    .pipe(cssConcat("./dev/dist/style.css"))
    .pipe(cssMinify())
    .pipe(gulp.dest("."));
    
});

gulp.task("imgOpt",() => {
    return gulp.src("./dev/imgs_raw/**/*.png")
    .pipe(imgOpt())
    .pipe(gulp.dest("./dev/dist/imgs"))
});

gulp.task("js", () => {
    return gulp.src("./dev/scripts_raw/**/*.js")
    .pipe(terser())
    .pipe(gulp.dest("./dev/dist/scripts"))
});
