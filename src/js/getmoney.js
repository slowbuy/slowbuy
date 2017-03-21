
$(function () {
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

    //titleµÄajax
    ajax('http://192.168.15.164:3000/api/getcategorybyid'+window.location.search.toLocaleLowerCase(),function(data){
        var html=template("title",data);
        //console.log(html);
        $(".title").html(html);

    });

    //ÄÚÈÝµÄajax
    ajax('http://192.168.15.164:3000/api/getproductlist'+window.location.search.toLocaleLowerCase(),function(data){

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
        console.log(oldparams);
        $('#select').on('change',function(){
            console.log('http://192.168.15.164:3000/api/getproductlist' + oldparams + '&pageId=' + parseInt($(this).val()));
            ajax('http://192.168.15.164:3000/api/getproductlist'+oldparams+'&pageId='+parseInt($(this).val()),function(data){
                console.log(data);
                //console.log(window.location.search.toLocaleLowerCase());
                var html=template("acontent",data);
                $(".advertisement>.content").find("ul").html(html);

            })
        })
        var newpage=1;
        $('#up').on('click',function(){
            newpage--;
            if(newpage<0){
                newpage=1;
                return;
            }
            $('#select').find('option').eq(newpage).prop('selected','true');
        })
        $('#down').on('click',function(){
            newpage++;
            if(newpage>total){
                newpage=total;
                return;
            }
            $('#select').find('option').eq(newpage).prop('selected','true');
        })

    });


})