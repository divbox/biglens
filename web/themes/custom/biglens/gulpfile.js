var gulp = require('gulp');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

var paths = {
    sass: ['src/assets/styles/*.scss'],
    css: 'assets/css',
    templates: 'templates'
};

gulp.task('styles', function () {
    "use strict";
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('copy', function () {
    "use strict";
    gulp.src([
        'node_modules/font-awesome/**',
        '!node_modules/font-awesome/**/*.map',
        '!node_modules/font-awesome/.npmignore',
        '!node_modules/font-awesome/*.txt',
        '!node_modules/font-awesome/*.md',
        '!node_modules/font-awesome/*.json'
    ])
        .pipe(gulp.dest('assets/vendor/font-awesome'));

    gulp.src(['node_modules/jquery.easing/jquery.easing.min.js'])
        .pipe(gulp.dest('assets/vendor/jquery-easing'));

    gulp.src(['node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest('assets/vendor/popper'));

    gulp.src(['node_modules/startbootstrap-agency/vendor/bootstrap/js/bootstrap.min.js'])
        .pipe(gulp.dest('assets/vendor/bootstrap/js'));

    gulp.src(['node_modules/startbootstrap-agency/js/agency.min.js'])
        .pipe(gulp.dest('assets/vendor/bootstrap/js'));

    gulp.src(['node_modules/startbootstrap-agency/img/**'])
        .pipe(gulp.dest('assets/vendor/bootstrap/images'));

});

// gulp.task('js', function () {
//     "use strict";
//     return gulp.src(paths.js_src)
//         .pipe(gulp.dest(paths.js_dest));
// });

gulp.task('watch:code', function () {
    "use strict";
    gulp.watch([
        paths.templates
    ], gulp.series(browserSync.reload));
});

gulp.task('watch:styles', function () {
    "use strict";
    gulp.watch([
        paths.sass
    ], gulp.series('styles'));
});

gulp.task('watch', gulp.parallel('watch:code', 'watch:styles'));

gulp.task('serve', gulp.series('styles', gulp.parallel('copy', 'watch')));
//     .on('change', function (evt) {
//         console.log('[watcher] File ' + evt.path.replace(/.*(?=sass)/, '') + ' was ' + evt.type + ', compiling...');
//     });
// );

gulp.task('default', gulp.series('serve'));
