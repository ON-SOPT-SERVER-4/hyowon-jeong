//block Scope
if(true){
  var x = 'var';
}
console.log(`var: ${x}`); // var: var

if(true){
  let y = 'let';
}
console.log(`let: ${y}`); //reference error


//function Scope
function colorFunction(){
  if(true){
    var color = 'blue';
    console.log(color); //blue
  }
  console.log(color); // blue
}
colorFunction();
console.log(color); // reference error


//hoisting
hoistFunction();

function hoistFunction(){
  console.log(x);
  var c = 'var';
  console.log(x);
}