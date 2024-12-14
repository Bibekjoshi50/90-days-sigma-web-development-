function nice(name){
    console.log("Hey " + name + "you are nice !")
}
console.log("Hey coder's i am learning javascript") 
console.log("Hey bibek yor are doing well ") 
console.log("HeyBibek your tshirt is nice ") 
console.log("Hey bibek you are nice") 
console.log("Hey bibek still keep learning ") 

function sum ( a, b, c =3){
    return a + b + c
}
result1 = sum (30, 5)
result2 = sum (3, 5)
result3 = sum (5, 2)
console.log("the sum of these number is :", result1)
console.log("the sum of these number is :", result2)
console.log("the sum of these number is :", result3)
const func1 = (x)=>{
    console.log(" i am an arrow function",x)
}
func1(34);
func1(66);
func1(34);