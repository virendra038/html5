var gulp = require('gulp'),
	browserSync = require('browser-sync');


gulp.task('browser-sync', function () {
   browserSync.init({
       server: {
           baseDir: "./",
           index: "index.html"
       },
       port:4211,
       files:['./index.html','./index.css'],
       ghostMode:{
			clicks:true,
			location:true,
			forms:true,
			scroll:true
		},
		injectChanges:true,
		logFileChanges:true,
		logLevel:'debug',
		logPrefix:'gulp-patterns',
		notify:true,
		reloadDelay:1000
   });
   
   
});