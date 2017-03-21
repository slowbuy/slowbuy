var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');

//����gulp-uglifyģ�飬����ѹ��JS
var uglify = require('gulp-uglify');

gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//���HTMLע��
        collapseWhitespace: true,//ѹ��HTML
        collapseBooleanAttributes: true,//ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//ɾ�����пո�������ֵ <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//ɾ��<script>��type="text/javascript"
        removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
        minifyJS: true,//ѹ��ҳ��JS
        minifyCSS: true//ѹ��ҳ��CSS
    };
    gulp.src('src/homepage.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/getmoney'));

});


// ��������ʹ�� gulp css ����������
gulp.task('minifycss', function () {
// 1. �ҵ��ļ�
    gulp.src('src/css/getmoney.css')
// 2. ѹ���ļ�
        .pipe(minifyCSS())
// 3. ���Ϊѹ���ļ�
        .pipe(gulp.dest('dist/getmoney/css'))
})



//'minjs'Ϊ�����Զ��������������������Ϊ'minjs'��������
gulp.task('minjs', function(){
    // 'script/*.js'����Ҫѹ����js�ļ�
    gulp.src('src/js/getmoney.js')
        //uglify()�ǵ��õ�ѹ��������ȥѹ��js
        .pipe(uglify())
        //gulp.dest�ǽ�ѹ������ļ����Ϊ�ĵķ�������浽newScript�ļ�����
        .pipe(gulp.dest('dist/getmoney/js'));
});


gulp.task('watch', ['testHtmlmin'], function () {
    gulp.watch(['src/homepage.html','src/css/getmoney.css','src/js/getmoney.js'], ['testHtmlmin','minifycss','minjs']);
})