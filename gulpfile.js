var gulp = require('gulp'),
    liveReload = require('connect-livereload'),
    express = require('express'),
    EXPRESS_ROOT = __dirname,
    EXPRESS_PORT = 4000,
    LIVERELOAD_PORT = 35729,
    tinyLr = require('tiny-lr')();

function startExpress() {
    var app = express();
    //app.use(liveReload());
    app.use(express.static(EXPRESS_ROOT));
    app.listen(EXPRESS_PORT);
}

function startLivereload() {
    tinyLr.listen(LIVERELOAD_PORT);
}

gulp.task('default', function() {
   startExpress();
   //startLivereload();
   console.log('Server on: Localhost: 4000');
});