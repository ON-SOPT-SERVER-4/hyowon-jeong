var variableVar = "123";
var variableVar = "321";

console.log(`variableVar : ${variableVar}`); // variableVar : 321
// var : 재선언 가능


let variableLet = "123";
let variableLet = "321";

console.log(`variableLet : ${variableLet}`); // syntax error
// let : 재선언 불가능


const variableConst = "123";
const variableConst = "321";

console.log(`variableConst : ${variableConst}`); // syntax error
// const: 재선언 불가능