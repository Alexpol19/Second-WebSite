var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn");
//            Задачи
//Запуск локальногосервера
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 2201
  });
  opn('http://localhost:2201')
});
//работа с hmtl файлами. чтоб перезагружалось!
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});
//Слежка watch
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);//при изменении /html запускать задачу 'html'
});
//Команды по умолчанию- запуск сервера и слежка
gulp.task('default', ['connect', 'watch']);