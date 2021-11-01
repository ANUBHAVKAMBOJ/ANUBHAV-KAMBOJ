var num = 5;
console.log("The global value of num is " + num);

function add(a,b){
    var num = a + b;
    console.log("The value of var in add is " + num);
}

function mul(a,b){
    var num = a*b;
    console.log("The value of var in mul is " + num);
}

add(8,12);
mul(12,3);

console.log("The original global value of num is " + num);
