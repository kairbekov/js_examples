// sum of all elements in array
function sumOfAllElements(array){
	var sum = 0;
	for (var i=0; i<array.length; i++){
		sum+=array[i];
	}
	return sum;
}

// sum of only positive elements in array
function sumOfPositive(array){
	sum = 0;
	for (var i=0; i<array.length; i++)
		if (array[i]>0) sum+=array[i];
	return sum;
}
alert("Sum of all elements in array : " + sumOfAllElements([1,-2,-3,4,5]));
alert("Sum of positive elements in array : " + sumOfPositive([1,-2,-3,4,5]));
