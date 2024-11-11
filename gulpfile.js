const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function comprimeImagen(){
    return gulp.src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"));
}
function comprimJavaScript(){
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./build/scripts"))

}

function compSass(){
    return gulp.src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:"compressed"
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./buld/styles"));
}

exports.sass = compSass;
exports.watch = function(){
    gulp.watch("./source/styles/*.scss",{ignored:false}, gulp.series(compSass));
}

exports.javascript = comprimJavaScript;
exports.images = comprimeImagen;