$(document).ready(function(){
    $(".theButton").click(function(){
        $  ("#panel .container").siblings().fadeTo(1000, .5);
       });

 $(".superButton").click(function(){
    $  ("#panel .container").siblings().fadeTo(1000, 1);
 })

 $(".theButton").mouseenter(function(){
    var col = $(this).css('background-color');
    $(".superButton").text(col);
    $(this).addClass("black_background");
    
 });

 $(".theButton").mouseleave(function(){
    $(this).removeClass("black_background");
});

});


/*

When the mouse hovers over a panel, that panel turns black
When the mouse moves away, the panel reverts back to its previous colour*/