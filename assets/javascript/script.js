$(document).ready(function(){

    $("#b1").mouseenter(function(){
        $(".choice").addClass("choice1");
    });
    $("#b1").mouseleave(function(){
        $(".choice").removeClass("choice1");
    });

    $("#b2").mouseenter(function(){
        $(".choice").addClass("choice2");
    });

    $("#b2").mouseleave(function(){
        $(".choice").removeClass("choice2");
    })

    $("form").hide(function(){
        $("form").fadeIn("slow");
    })

    $(".sblv").hide(function(){
        $(".sblv").fadeIn(3500);
    })




});