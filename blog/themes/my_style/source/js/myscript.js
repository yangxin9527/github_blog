/**
 * Created by admin on 2017/6/13.
 */
$(function () {
    var locationHref = "1http://localhost:4000/";
    if(location.href==locationHref){
        $("#header").css({
            height:"100%"
        });
        $("#header-outer").show();
        $("body").on("click",function () {
            $("#header").css({
                height:"300px"
            });
            $(".outer").show();
            $("body").off("click");
        })
    }else{
        $(".outer").show();
    }
});