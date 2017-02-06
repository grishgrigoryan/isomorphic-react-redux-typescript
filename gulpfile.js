'use strict';
var gulp = require("gulp"),
    rimraf = require("rimraf"),
    browserify = require('browserify'),
    browserifyShim = require('browserify-shim'),
    typescript = require("gulp-typescript"),
    runSequence = require('run-sequence'),
    source = require('vinyl-source-stream'),
    transform = require('vinyl-transform');

var paths = {
    source: "./src/",
    public: "./public/",
    output: "./out/",
    browserify :{
        input       : './out/client/',
        output      : './public/js'
    }
};

var build = {
    input: {
        files: {
            // Source to compile entries
            ts: [
                paths.source + '**/*.ts',
                paths.source + '**/*.tsx'
            ]
        }
    },
    output: {
        dirs: {
            ts: paths.output,
            scripts: paths.public + 'scripts'
        }
    },
    browserify :{
        entries : paths.browserify.input + 'index.js'
    }
};

// Basic tasks
gulp.task("clean:browserify", function (cb) {
    rimraf(paths.browserify.input, cb);
});

gulp.task("clean:output", function (cb) {
    rimraf(paths.output, cb);
});

gulp.task("clean:client", function (cb) {
    rimraf(paths.browserify.output, cb);
});

gulp.task("clean", [ "clean:client", "clean:output" ]);

// Compilation and packaging
gulp.task('typescript', function () {
    var tsResult = gulp
        .src(build.input.files.ts)
        .pipe(typescript({
            noImplicitAny: false,
            noEmitOnError: true,
            experimentalDecorators:true,
            declarationFiles: true,
            removeComments: false,
            module: "commonjs",
            sourceMap: true,
            target: "ES5",
            jsx: "react"
        }));
        
    return tsResult.js
        .pipe(gulp.dest(build.output.dirs.ts));
});

gulp.task('browserify', function() {
    return browserify({
            insertGlobals: true,
            entries: build.browserify.entries
        })
        .transform(browserifyShim)
        .bundle()
            .on('error', console.error.bind(console)) 
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.browserify.output));
});

gulp.task('build-client', function(callback) {
    runSequence(['browserify'], [ 'clean:browserify'], callback);
});


gulp.task('compile', function(callback) {
    runSequence(['typescript'], [ 'build-client'], callback);
});

gulp.task('recompile', function(callback) {
    runSequence(['typescript'], ['browserify'], callback);
});

gulp.task('watch', function() {
    gulp.watch(build.input.files.ts, ['recompile']);
});

gulp.task('local-setup', function(callback) {
    runSequence(['clean'], ['compile'],['watch'] ,callback);
});

gulp.task('default', ['clean', 'compile'], function(){});
