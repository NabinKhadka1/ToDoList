$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	
	event.stopPropagation();

});

$("input[type='text'").keypress(function(event){
	if(event.which===13) {
		var todos=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' style='line-height:unset'></i></span>" + todos + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
	
});
