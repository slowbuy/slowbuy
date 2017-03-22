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


    ajax('http://192.168.15.164:3000/api/getinlanddiscount', function (data) {
        var html = template("content", data);
        $(".content").find("ul").html(html);

        $('.content').find('li:gt(7)').hide();


    })


    var i = 3;
    var bodyheight = document.body.offsetHeight;
    window.document.onscroll = function () {
        var top = document.body.scrollTop;
        var slientheight = window.innerHeight;
        if (bodyheight - slientheight <= top) {
            i += 4;
            $('.content').find('li:lt(' + i + ')').show();
            bodyheight = document.body.offsetHeight;
        }

    }

})