/**
 * Created by Administrator on 2017/3/19.
 */
$(function () {
    function ajax(url, fn) {
        $.ajax({
            type: 'get',
            url: url,
            dateType: 'jsonp',
            success: function (data) {
                fn(data);
            }
        })
    }


    var shopid=0;
    var areaid=0;

    //点击加载商城
    $('.b a:eq(0)').on('click',function(){
        if(!$('.c li')[0]){
            ajax('http://192.168.15.22:3000/api/getgsshop',function(data) {
                var html = template("c", data);
                $('.c>ul').html(html);
                $('.c>ul').show();


                //点击换商城
                $('.c li').on('click',function(){
                    shopid=parseInt($(this).attr('value'));
                    ajax('http://192.168.15.22:3000/api/getgsproduct?shopid='+shopid+'&areaid='+areaid,function(data) {
                        var html = template("matter", data);
                        $('.matter ul').html(html);
                    })

                    $('.c>ul').hide();
                    $(this).css({color:'red',backgroundColor:'yellow'}).siblings().css({color:'#5a5a5a'});
                })

            })
        }else{
            $('.c>ul').toggle();
        }
        $('.c>ul').parent().siblings().find('ul').hide();

    })


    //点击加载地区
    $('.b a:eq(1)').on('click',function(){
        if(!$('.d li')[0]){
        ajax('http://192.168.15.22:3000/api/getgsshoparea',function(data) {
            var html = template("c", data);
            $('.d>ul').html(html);
            $('.d>ul').show();


            //点击换地区
            $('.d li').on('click',function(){
                areaid=parseInt($(this).attr('value'));
                ajax('http://192.168.15.22:3000/api/getgsproduct?shopid='+shopid+'&areaid='+areaid,function(data) {
                    var html = template("matter", data);
                    $('.matter ul').html(html);
                })

                $('.d>ul').hide();
                $(this).css({color:'red',backgroundColor:'yellow'}).siblings().css({color:'#5a5a5a'});
            })


        })
        }else{
            $('.d>ul').toggle();
        }
        $('.d>ul').parent().siblings().find('ul').hide();
    })

    //默认渲染
    ajax('http://192.168.15.22:3000/api/getgsproduct?shopid=0&areaid=0',function(data) {
         var html = template("matter", data);
         $('.matter ul').html(html);
    })


})