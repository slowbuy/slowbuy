
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


    ajax('http://192.168.15.56:3000/api/getproduct'+window.location.search.toLocaleLowerCase(),function(data){
        data.result[0].productName=data.result[0].productName.split(' ')[0];
        data.kind=sessionStorage.getItem('kind1');
        var html=template("title",data);
        $(".title").html(html);
    });


    ajax('http://192.168.15.56:3000/api/getproduct'+window.location.search.toLocaleLowerCase(),function(data){
        var html=template("details",data);
        $(".details").html(html);


        var html1=template("buytemplate",data);
        $("#buy").html(html1);
    });


    ajax('http://192.168.15.56:3000/api/getproductcom'+window.location.search.toLocaleLowerCase(),function(data){
        var html=template("talk",data);
        $(".talk").html(html);
    });
})