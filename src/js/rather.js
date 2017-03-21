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
    ajax('http://mmb.ittun.com/api/getcategorytitle',function(data){
        var html=template('list',data);
        $('.list').find('ul').html(html);

        ajax('http://mmb.ittun.com/api/getcategory?titleid=0',function(data){
            var html=template('listcontent',data);
            $('.list').find('ul>li:eq(1)').html(html);
        });

        ajax('http://mmb.ittun.com/api/getcategory?titleid=1',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(3)').html(html);
        });
        ajax('http://mmb.ittun.com/api/getcategory?titleid=2',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(5)').html(html);
        });
        ajax('http://mmb.ittun.com/api/getcategory?titleid=3',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(7)').html(html);
        });
        ajax('http://mmb.ittun.com/api/getcategory?titleid=4',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(9)').html(html);
        });
        ajax('http://mmb.ittun.com/api/getcategory?titleid=5',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(11)').html(html);
        });
        ajax('http://mmb.ittun.com/api/getcategory?titleid=6',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(13)').html(html);
        });
        ajax('http://mmb.ittun.com/api/getcategory?titleid=7',function(data){
            var html=template('listcontent',data);
            $('.list').find('>ul>li:eq(15)').html(html);
        });

        $('.list').find('>ul>li:odd').hide();
        $('.list').find('>ul>li:even').on('click', function () {
            //ajax('http://mmb.ittun.com/api/getcategory?titleid='+($(this).index()/2),function(data){
            //    var html=template('listcontent',data);
            //    $('.list').find('ul>li:eq('+($(this).index()+1)+')').html(html);
            //});
            //console.log($('.list').find('ul>li:eq(' + ($(this).index() + 1) + ')'));



            $(this).find('span').toggleClass('mui-icon-arrowdown').end().siblings().find('span').attr('class','mui-icon mui-icon-arrowdown mui-icon-arrowup');
            $(this).next().toggle().siblings('.listcontent').hide();
        })
    });




})