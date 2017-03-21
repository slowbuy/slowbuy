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


    ajax('http://192.168.15.22:3000/api/getcategorytitle',function(data){
        var html=template('list',data);
        $('.list').find('ul').html(html);


        $('.list').find('>ul>li:even').on('click', function () {
            var that=$(this);
            if(that.next().attr('class').indexOf('ajax')<=0){
                ajax('http://192.168.15.22:3000/api/getcategory?titleid='+($(this).index()/2),function(data){
                    var html=template('listcontent',data);
                    that.next().html(html);
                    that.next().show().addClass('ajax');

                    that.next().find('li').on('click',function(){
                        window.sessionStorage.setItem('kind1',$(this).find('a').html());
                    });


                });
            }else{
                that.next().toggle().siblings('.listcontent').hide();
            }
            that.find('span').toggleClass('mui-icon-arrowdown').end().siblings().find('span').attr('class','mui-icon mui-icon-arrowdown mui-icon-arrowup');

        })
    });




})