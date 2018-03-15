$(document).ready(function(){
    $('#inverterum').click(function(){
        $('body').css('background', '#000');
        $('p').css('color', '#fff');
        $('h3').css('color', '#fff');
    });
     $('#inverterdois').click(function(){
       $('body').css('background', '#fff');
       $('p').css('color', '#000');
         $('h3').css('color', '#000');
        }) ;
     
     $('#grande').click(function(){
       $('p').css('font-size', '22px');
        }) ;
    
     $('#pequena').click(function(){
       $('p').css('font-size', '12px');
     });
});

