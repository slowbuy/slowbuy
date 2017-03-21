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


    var href=window.location.search
    ajax('http://192.168.15.22:3000/api/getbrand'+href,function(data) {
        var html = template("content", data);
        $('.content>ul').html(html);
    })

})