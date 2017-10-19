// switch case example
function toDays(day){
	var name = ""
	switch(day){
		case 1: name = "Monday"; break;
		case 2: name = "Tuesday"; break;
		case 3: name = "Wednesday"; break;
		case 4: name = "Thursday"; break;
		case 5: name = "Friday"; break;
		case 6: name = "Saturday"; break;
		case 7: name = "Sunday"; break;
		default: name = "Only 1-7"
	}
	return name;
}

// if else example
function odd_or_even(x){
	if (x%2==0) return "even";
	else return "odd"
}

alert("3th day of the week: "+toDays(3));
alert("12: "+odd_or_even(12));