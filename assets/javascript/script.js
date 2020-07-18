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



});