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

    //var href=location.search;
    ajax('http://192.168.15.22:3000/api/getcouponproduct'+window.location.search.toLocaleLowerCase(),function(data){
        var html=template("content",data);
        $(".content>ul").html(html);

        var that;
        $('.content').find('li').on('click',function(){
            that=$(this);
            $(this).find('.imgbox').clone(true).appendTo($('.mask'))
            $('.mask').show();
        })

        $('.jiantou>span:eq(0)').on('click',function(){
            if(that.prev()[0]){
                that=that.prev();
            }
           $('.mask').find('.imgbox').remove();
            that.find('.imgbox').clone(true).appendTo($('.mask'));
        })



        $('.jiantou>span:eq(1)').on('click',function(){
            $('.mask').find('.imgbox').remove();
            that.next().find('.imgbox').clone(true).appendTo($('.mask'));
            if(that.next()[0]){
                that=that.next();
            }
        })

    });


})