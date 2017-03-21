/**
 * Created by Administrator on 2017/3/19.
 */
$(function(){

    //console.log(screen.width);
    var ulwidth=0;
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

    //内容的ajax
    ajax('http://192.168.15.22:3000/api/getbaicaijiaproduct?titleid=1',function(data){
        var html=template("content",data);
        $(".content").find('ul').html(html);
    });



    //nav的渲染
    ajax('http://192.168.15.22:3000/api/getbaicaijiatitle',function(data){
         var html=template("title",data);
        $(".title1").html(html);


        //动态设置ul的宽度
        $('.nav').find('li').each(function(i,v){
            ulwidth+=$(v).innerWidth();
        })
        $('.nav').find('ul').width(ulwidth+"px");

        //nav的点击事件
        $('.title1>li>a').on('click',function(){

            //设置样式
            $(this).css({
                borderBottom:'2px solid red',
                color:'red'
            }).parent().siblings().find('a').css({
                borderBottom:'none',
                color:'#333'
            })

            //点击后的滑动
            if($(this).parent().offset().left<0){
                enddistance-=$(this).parent().offset().left;
                $(this).parents('ul').css({transform:'translateX('+enddistance+'px)'})
            }


            if($(this).parent().offset().left+$(this).parent().innerWidth()>screen.width){
               var twotrans=$(this).parent().offset().left+$(this).parent().innerWidth()-screen.width;
                enddistance-=twotrans;
                $(this).parents('ul').css({transform:'translateX('+enddistance+'px)'})
            }

            //根据点击渲染数据
            var titledid=parseInt($(this).attr('value'));
            ajax('http://192.168.15.22:3000/api/getbaicaijiaproduct?titleid='+titledid,function(data){
                var html=template("content",data);
                $(".content").find('ul').html(html);
            });




        })

        //nav的滑动事件
        var enddistance=0;
        var nowpageX=0;
        var endpageX=0;
        var distance=0;
        $('.title1').on('touchstart',function(e){
            nowpageX= e.originalEvent.touches[0].pageX;
        })

        $('.title1').on('touchmove',function(e){
            endpageX= e.originalEvent.touches[0].pageX;
            distance=endpageX-nowpageX;
            if((distance+enddistance)>0){
                enddistance=0;
                return;
            }else if((distance+enddistance)<-(ulwidth-screen.width)-30){
                enddistance=-(ulwidth-screen.width)-30;
                return;
            }
            $(this).css({transform:'translateX('+(distance+enddistance)+'px)'});
        })

        $('.title1').on('touchend',function(e){
            enddistance+=distance;
            distance=0;
        })
    });




})