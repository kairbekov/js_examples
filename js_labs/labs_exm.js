n = Number(prompt("n",""));
a = []

// s1 = 8, s2 =13 , res = 5
for (var i=0; i<n; i++){
	a[i] = []
	for (var j=0; j<n; j++)
		a[i][j] = Number(prompt("",""));
}

s1 = 0, s2=0

for (var i=0; i<n; i++){
	s1+=a[i][i]
	s2+=a[i][n-i-1]
}
alert(s1+" "+s2)
alert(Math.abs(s1-s2))

