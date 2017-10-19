$(function(){

	var a = 0;
	$('#btn').click(function(){
		a++;
		var id = "li-"+a;
		var cb = "<input id="+id+" type='checkbox'>";
		var p = "<p>"+$('#text').val()+"</p>";
		var del = "<h4 id=el-"+a+">X</h4>";
		var text = "<li>"+ cb+p+del+"</li>";
		$('#container').append(text);
		$("#text").val("");
		$('#'+id).on('click',clicked);
		$('#el-'+a).on('click',toDelete);
	});

	function clicked(){
		//alert($(this)[0].checked)
		if ($(this)[0].checked == true){
			$(this).next().css("color", "grey");
			$(this).next().css("text-decoration", "line-through");
		}
		else {
			$(this).next().css("color", "black");
			$(this).next().css("text-decoration", "none");
		}
	}
	function toDelete(){
		$(this).parent().hide();
	}

});