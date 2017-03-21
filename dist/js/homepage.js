$(function(){function t(t,n){$.ajax({type:"get",url:t,dateType:"json",success:function(t){n(t)}})}t("http://192.168.15.22:3000/api/getindexmenu",function(t){t=t.result;var n={data:t},e=template("classify",n);$(".classify").find("ul").html(e)

    $('.classify ul li:gt(7)').hide();
    $('.classify ul li:eq(7)').on('click',function(){
        $('.classify ul li:gt(7)').toggle();
    })


}),t("http://192.168.15.22:3000/api/getmoneyctrl",function(t){t=t.result,console.log(t);var n={data:t},e=template("acontent",n);$(".advertisement>.content").find("ul").html(e)})



});