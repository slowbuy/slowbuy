/**
 * Created by Administrator on 2017/3/18.
 */
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

       //渲染下拉框控件
    ajax('http://192.168.15.22:3000/api/getmoneyctrl',function(data) {
        var html = template("acontent", data);
        $(".advertisement>.content").find("ul").html(html);
        var total = Math.ceil(data.totalCount/data.pagesize);
        for (var i = 1; i <= total; i++) {
            var data1 = {
                total: total,
                newpage: i
            }
            var html1 = template("option", data1);
            $('#select').append(html1);
        }



        //改变页数是加载其他页的数据
        $('#select').on('change',function(){
            newpage=parseInt($(this).val());
            ajax('http://192.168.15.22:3000/api/getmoneyctrl?'+'pageid='+newpage,function(data){
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