$(document).ready(function(){
	$('.menu1 li:has(ul)').click(function(){
         

         if ($(this).hasClass('activado')){
           
             $(this).children('ul').slideToggle();
             
         }
	});
});

