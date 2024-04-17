$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close").click(function(){
        $("body").removeClass("menuToggle");
    });
});

