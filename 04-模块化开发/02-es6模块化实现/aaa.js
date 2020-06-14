var name="小明"
var age=23
var height=1.73
var flag=true
function sum(num1,num2){
  return num1+num2

}
if(flag){
  console.log(sum(20,30));
  
}
// 1、导出方式一：
export{flag,sum}

// 2、导出方式二：
export var num1=1000;
export var height=1.73

// 3、导出函数和类：
export function mul(num1,num2){
  return num1+num2
}

export class Person{
  run(){
    console.log("你好，世界");
    
  }
}

// 4、export default
// const address="北京市"
// export {
//   address
// }

// export const address="北京市"
// const address="北京市"

// export default address

export default function(argument){
  console.log(argument);
  
}
