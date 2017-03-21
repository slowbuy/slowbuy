
$(function () {
    function ajax(url,fn){
        $.ajax({
            type:'get',
            url:url,
            dateType:'jsonp',
            success:function(data){
                fn(data);
            }
        })
    }

    //title的ajax
    ajax('http://192.168.15.22:3000/api/getcategorybyid'+window.location.search.toLocaleLowerCase(),function(data){
        var html=template("title",data);
        //console.log(html);
        $(".title").html(html);

        $(".title a:eq(0)").on('click',function(){
            history.go(-2);
        })



    });

    //内容的ajax
    ajax('http://192.168.15.22:3000/api/getproductlist'+window.location.search.toLocaleLowerCase(),function(data){

        var html=template("acontent",data);
        $(".advertisement>.content").find("ul").html(html);
        var total=data.totalCount;
        for(var i=1;i<=total;i++){
            var data1={
                total: total,
                newpage:i
            }
            var html1=template("option",data1);
            $('#select').append(html1);
        }


        var oldparams=window.location.search.toLocaleLowerCase();
        //改变选页从新渲染
        $('#select').on('change',function(){
            newpage=parseInt($(this).val());
            ajax('http://192.168.15.22:3000/api/getproductlist'+oldparams+'&pageid='+newpage,function(data){
                var html=template("acontent",data);
                $(".advertisement>.content").find("ul").html(html);
            })
        })
        var newpage=1;
        $('#up').on('click',function(){
            newpage--;
            if(newpage<=0){
                newpage=1;
                return;
            }
            $('#select').find('option').eq(newpage-1).prop('selected','true');
            $('#select').trigger('change');
        })
        $('#down').on('click',function(){
            newpage++;
            if(newpage>total){
                newpage=total;
                return;
            }
            $('#select').find('option').eq(newpage-1).prop('selected','true');
            $('#select').trigger('change');
        })

    });


})