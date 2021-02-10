const { src, dest } = require('gulp');
const sass = require('gulp-sass');

var config = {
  bootstrapDir: 'node_modules/bootstrap',
  publicDir: '/site',
};

exports.default = function() {
  return src('scss/custom.scss')
    .pipe(sass({
    includePaths: [config.bootstrapDir + '/scss']
    }))
    .pipe(dest('site/'));
}