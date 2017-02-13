// min of 3 numbers
function max(A,B,C){
	if (A>=B && A>=C) return A;
	else if (B>=A && B>=C) return B;
	else if (C>=A && C>=B) return C;
}

// calculate the number of letters
function calc(string){
	arr = [];
	res = "";
	for (var i=0; i<26; i++) arr.push(0);
	string = string.toLowerCase();

	for (var i=0; i<string.length; i++)
		arr[string.charCodeAt(i)-97]++;
		
	for (var i=0; i<arr.length; i++)
		res += String.fromCharCode(i+97)+" - "+arr[i]+"\n";
	return res;
}

alert("Max of (10,-2,8) = "+max(10,-2,8));
string = "abcdAa";
alert("Number of each letters in "+string+" :"+calc(string));