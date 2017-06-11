$(function(){

   $('.ajax').on('submit', function(){

    
   	var form = $(this),
         url  = form.attr('action'),
         type = form.attr('method'),
         data = {};

       form.find('[name]').each(function(){

       	var form = $(this),
       	    name = form.attr('name'),
       	    value = form.val();
       	    data[name] = value;


       	});  

     $.ajax({

     	url: url,
     	type:type,
     	data:data,
     	success:function(response){
     		alert(response);
     	}
     });

   		return false;

   	});

})