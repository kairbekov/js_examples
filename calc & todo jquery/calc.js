//github.com/kairbekov/
$(function(){
	var textBox = $("#text");
	var btn = [];
	var A = null;
	var B = null;
	var O;
	for (var i=0; i<10; i++){
		var b = $('#btn-'+i);
		b.on('click',numClicked);
		btn.push(b);
	}
	$('#btn-s').on('click', operClicked);
	$('#btn-a').on('click', operClicked);
	$('#btn-m').on('click', operClicked);
	$('#btn-d').on('click', operClicked);
	$('#btn-c').on('click', clearClicked);
	$('#btn-e').on('click', result);

	function numClicked(event){
		s = textBox.val()+$(event.target).text();
		textBox.val(s);
		//console.log(event);
	}

	function operClicked(event){
		A = textBox.val();
		O = $(event.target).text();
		B = null;
		textBox.val("");
		console.log(A+O);
	}

	function result(){
		if (B===null){
			B = textBox.val();
			console.log(B)
		}
		var a = eval(A+O+B);
		A = a;
		textBox.val(A);
	}

	function clearClicked(){
		s = textBox.val();
		s=s.substr(0,s.length-1);
		console.log(s);
		if (B===null){
			A = s;
		}
		else {
			B = s;
		}
		textBox.val(s);
	}

});