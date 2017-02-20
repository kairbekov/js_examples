user = {}

user['name'] = "Vasya"

user['surname'] = "Petrov"

user['name'] = "Sergey"

//user['phones'] = ["+6337384", "+742342"]

user.points = {
	"oop": 100,
	"js": 100,
	"math": 100
}

user2 = {
	name: "adas",
	surname: "sfs"
}
//array = [user, user2]
array.push(user)
array.push(user2)

function calc(user){

	return user.points.oop+user.points.js
}
console.log(user)
