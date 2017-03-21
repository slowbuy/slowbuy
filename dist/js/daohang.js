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

    ajax('http://192.168.15.22:3000/api/getsitenav',function(data){
        var html=template("content",data);
        $(".content>ul").html(html);
    })



})
