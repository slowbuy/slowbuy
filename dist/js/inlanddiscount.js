
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


    ajax('http://192.168.15.164:3000/api/getinlanddiscount',function(data) {
        var html = template("content", data);
        $(".content").find("ul").html(html);

        console.log($('.content ul li:gt(15)'));

        $('.content').find('li:gt(15)').hide();


    })

    window.document.onmousewheel=function(){
        var top=document.body.scrollTop;
        var slientheight=window.innerHeight;
        var  bodyheight=document.body.offsetHeight;

        if(bodyheight-slientheight<=top){
            $('.content').find('li:gt(15)').show();

        }

    }

})