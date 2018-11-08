// including plugins
var gulp = require('gulp')
var concat = require("gulp-concat");
var eslint = require('gulp-eslint');
var babelify    = require('babelify');
var browserify  = require('browserify');
var source = require('vinyl-source-stream');
var distFolder = "./client/bundles/";
var clientFolder = "./client/";
 
// task
gulp.task('concat:libs', function () {
    gulp.src('node_modules/jquery/dist/jquery.js') // path to your files
    .pipe(concat('libs.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest(distFolder));
});

gulp.task('concat:css', function () {
    gulp.src([clientFolder + "css/*.css", clientFolder + "components/*.css"])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(distFolder));
});

gulp.task('eslint', function () {
    gulp.src([clientFolder + "components/*.jsx", clientFolder + "dataaccess/*.js", clientFolder + "stores/*.js", clientFolder + "main.js"])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('scripts', function () {
    return browserify({
            entries: clientFolder + 'main.js'
        })
        .transform(babelify.configure({
            presets : ["es2015", "react"]
        }))
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('watch', function () {
    gulp.watch([clientFolder + "components/*.jsx", clientFolder + "dataaccess/*.js", clientFolder + "stores/*.js", clientFolder + "main.js"], [ "scripts", "eslint" ]);
    gulp.watch([clientFolder + "css/*.css"], [ "concat:css" ]);
});

gulp.task( 'default', [ 'eslint', "scripts", "concat:css", "concat:libs" ] )