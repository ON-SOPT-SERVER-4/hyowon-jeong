var variableVar = "123";
variableVar = "321";

console.log(`variableVar : ${variableVar}`); // variableVar : 321
// var: 재할당 가능


let variableLet = "123";
 variableLet = "321";

console.log(`variableLet : ${variableLet}`); // variableLet : 321
// let: 재할당 가능


const variableConst = "123";
variableConst = "321";

console.log(`variableConst : ${variableConst}`); // type error
// const: 재할당 불가능