console.log("Hello world i am leaerning java script ")
console.log("welcome to my javascript journy ")
let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)
for(let i = 0; i < 100; i++){
    console.log(a+i);
}
let obj = {
name:"bibek",
role: "Programmer",
company : "IT help corner",
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}
for( const c of "Iamlerningjavascript"){
    console.log(c)
}
// whileloop
let i = 0;
while(i<6){
    console.log(i)
    i++
}