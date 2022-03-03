function ColorChange(a, b, c){
$(document).ready(function(){
    $(a).hover(function(){
      $(b).css('background','#4558FF');
      $(c).css('color','#FFFFFF');
    },function(){
      $(b).css('background','#FFFFFF');
      $(c).css('color','#4558FF');
    })})
}

ColorChange('.apply, .applyer', '.apply', '.applyer');
ColorChange('.bookbut, .gobook', '.bookbut', '.gobook');
ColorChange('.lookbor, .lookat', '.lookbor', '.lookat');
/*$(document).ready(function(){
    $('.apply, .applyer').hover(function(){
      $('.apply').css('background','#4558FF');
      $('.applyer').css('color','#FFFFFF');
    },function(){
      $('.apply').css('background','#FFFFFF');
      $('.applyer').css('color','#4558FF');
    })})

$(document).ready(function(){
    $('.bookbut, .gobook').hover(function(){
        $('.bookbut').css('background','#4558FF');
        $('.gobook').css('color','#FFFFFF');
    },function(){
        $('.bookbut').css('background','#FFFFFF');
        $('.gobook').css('color','#4558FF');
    })})

$(document).ready(function(){
    $('.lookbor, .lookat').hover(function(){
        $('.lookbor').css('background','#4558FF');
        $('.lookat').css('color','#FFFFFF');
    },function(){
        $('.lookbor').css('background','#FFFFFF');
        $('.lookat').css('color','#4558FF');
    })})*/

function HoverChange(a, b, c){
$(document).ready(function(){ 
    $(a).hover(function(){  
        $(b).fadeOut(200)
        $(c).fadeIn(200) 
    }, function(){  
        $(c).fadeOut(200)
        $(b).fadeIn(200); 
    })}) 
}

HoverChange('.w1','.comput','.computon');
HoverChange('.w2','.books','.bookson');
HoverChange('.w3','.folders','.folderson');
/*
$(document).ready(function(){ 
    $(".w1").hover(function(){  
        $(".comput").fadeOut(200)
        $('.computon').fadeIn(200) 
    }, function(){  
        $(".computon").fadeOut(200)
        $('.comput').fadeIn(200); 
    })}) 

$(document).ready(function(){ 
    $(".w2").hover(function(){  
        $(".books").fadeOut(200)
        $('.bookson').fadeIn(200) 
    }, function(){  
        $(".bookson").fadeOut(200)
        $('.books').fadeIn(200); 
    })}) 

$(document).ready(function(){ 
    $(".w3").hover(function(){  
        $(".folders").fadeOut(200)
        $('.folderson').fadeIn(200) 
    }, function(){  
        $(".folderson").fadeOut(200)
        $('.folders').fadeIn(200); 
    })}) */

