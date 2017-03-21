/**
 * Created by Administrator on 2017/3/18.
 */
$(function () {
    function ajax(url, fn) {
        $.ajax({
            type: 'get',
            url: url,
            dateType: 'json',
            success: function (data) {
                fn(data);
            }
        })
    }

    //得到参数
    var href=window.location.search;

    //根据参数加载数据
    if(parseInt(href.split('=')[1])<20){
        ajax('http://192.168.15.22:3000/api/getdiscountproduct'+href,function(data){
            data.target=parseInt(href.split('=')[1]);
            var html=template("content",data);
            $(".content").html(html);
        })
    }else{
        ajax('http://192.168.15.22:3000/api/getmoneyctrlproduct'+href,function(data){
            data.target=parseInt(href.split('=')[1]);
            var html=template("content",data);
            $(".content").html(html);
        })
    }





        //var html1=template("nei",data);
        //$(".nei").html(html1);





})