var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');

//引入gulp-uglify模块，用于压缩JS
var uglify = require('gulp-uglify');

gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/homepage.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/getmoney'));

});


// 在命令行使用 gulp css 启动此任务
gulp.task('minifycss', function () {
// 1. 找到文件
    gulp.src('src/css/getmoney.css')
// 2. 压缩文件
        .pipe(minifyCSS())
// 3. 另存为压缩文件
        .pipe(gulp.dest('dist/getmoney/css'))
})



//'minjs'为我们自定义的任务名，匿名函数为'minjs'具体任务
gulp.task('minjs', function(){
    // 'script/*.js'是需要压缩的js文件
    gulp.src('src/js/getmoney.js')
        //uglify()是调用的压缩方法，去压缩js
        .pipe(uglify())
        //gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
        .pipe(gulp.dest('dist/getmoney/js'));
});


gulp.task('watch', ['testHtmlmin'], function () {
    gulp.watch(['src/homepage.html','src/css/getmoney.css','src/js/getmoney.js'], ['testHtmlmin','minifycss','minjs']);
})