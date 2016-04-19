var gulp = require('gulp');
var nodeMon = require('gulp-nodemon');

gulp.task('default', function () {
  nodeMon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  })
    .on('restart', function () {
      console.log('Restarting nodemon...');
    });
});