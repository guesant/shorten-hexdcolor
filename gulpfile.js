const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const configs = {
	js: {
		src: 'src/**/*.js',
		output: {
			path: 'lib/',
		},
	},
};

// Gerar a versão de produção
function build() {
  return gulp
    .src(configs.js.src)
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest(configs.js.output.path));
}
gulp.task('build', build);


// Assistir as mudanças dos arquivos e executar as funções
function watch() {
  gulp.watch(configs.js.src, build);
}
gulp.task('watch', watch);


// Tarefa padrão do Gulp, que inicia o watch e o build
gulp.task('default', gulp.parallel('watch', 'build'));
