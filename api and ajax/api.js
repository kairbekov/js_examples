$(function(){
	URL = "https://restcountries.eu/rest/v2/name/";
	$('button').click(function(){
		var text = $('input').val();
		$.ajax({
			type: 'GET',
			url: URL+text,
			success:function(data){
				flag = data[0]['flag'];
				name =  data[0]['name'];
				capital = data[0]['capital'];
				$('#name').text(name);
				$('#capital').text(capital);
				$('img').attr("src",flag);
			}
		});
	});
});