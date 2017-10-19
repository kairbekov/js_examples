// sum of only numbers in array
function sumOfOnlyNumbers(array){
	sum = 0;
	for (var i=0; i<array.length; i++)
		if (typeof(array[i])=="number") sum+=array[i];
	return sum;
}

// check whether a number is a power of 2
function isPowerOfTwo(x){
	while(x!=1){
		if (x%2==1) return "NO";
		x/=2;
	}
	return "YES";
}

alert("Is 64 power of 2? : "+isPowerOfTwo(64));
alert("Summ of only numbers in array :"+sumOfOnlyNumbers([1,2,"hello",false,"0",10,-3,"lala"]));