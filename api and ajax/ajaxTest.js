$(function(){
	$('button').click(function(){
		URL = "https://restcountries.eu/rest/v2/name/Kazakhstan"
		$.ajax({
			type: 'GET',
			url: URL,
			dataType: 'json',
			success: function(data){
				data = data[0];
				console.log(data);
			},
			error: function(data){
				console.log(data);
			}
		})
	});
});