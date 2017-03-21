/**
 * Created by Administrator on 2017/3/20.
 */
$(function(){
    function ajax(url,fn){
        $.ajax({
            type:'get',
            url:url,
            dateType:'json',
            success:function(data){
                fn(data);
            }
        })
    }

    //var n=-1;
    ajax('http://192.168.15.22:3000/api/getbrandtitle',function(data){
        var html=template('list',data);
        $('.list').find('ul').html(html);
    });




})