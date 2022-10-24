import {a} from './modules/a.mjs'

console.log(a);// 1

setTimeout(()=>{
  console.log(a); // 10,说明导出的值是会随着源文件的代码更新的
},6000)