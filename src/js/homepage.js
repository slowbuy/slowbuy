
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
     //����ajax
     ajax('http://mmb.ittun.com/api/getindexmenu',function(data){
         data=data.result;
         var templateobj={
             data:data
         }
         var html=template("classify",templateobj);
         $(".classify").find("ul").html(html);});


     //���ݵ�ajax
     ajax('http://mmb.ittun.com/api/getmoneyctrl',function(data){
         data=data.result;
         console.log(data);
         var templateobj={
             data:data
         }
         var html=template("acontent",templateobj);
         $(".advertisement>.content").find("ul").html(html);});
 })
