$(document).ready(function()
{
    if($(window).width() >=720)
        {
    $(function(){
  $(window).scroll(function(){
    var aTop = $('header').height();
      
    if($(this).scrollTop()>0){
        $('header').css("height","70px");  
        $('#content').css("margin-top","70px");
        $('#logo').css("width","10%");
        $('nav ul').css("margin-top","-20px");
    }
      
      
      else if($(this).scrollTop()==0){
        $('header').css("height","140px");  
        $('#content').css("margin-top","140px");
        $('#logo').css("width","25%");
        $('nav ul').css("margin-top","50px");
    }
   
  });
});
        }
    
    
                  
});