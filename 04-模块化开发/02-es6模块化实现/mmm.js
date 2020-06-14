// 1、导入{}中定义的变量
import {flag,sum, Person} from "./aaa.js";

if(flag){
  console.log("你好");
  console.log(sum(40,50));
  
}

// 2、直接导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1);
console.log(height);

// 3/、导入export 的function
import {mul} from "./aaa.js";
console.log(mul(50,50));

const p=new Person();
p.run()

// 4、导入export default中的内容
import addr from "./aaa.js";
addr("hello")

// 5、统一全部导入
import{flag,num,num1,heigth,sum,Person,mul} from "./aaa.js"

import * as aaa from "./aaa.js"

console.log(aaa.flag);


