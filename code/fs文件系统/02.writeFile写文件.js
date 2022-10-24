const fs = require('fs')

// 如果没找到文件会先创建
// fs.writeFile('./file.txt','你好大下',(err)=>{
//   if(err){
//     console.log('写入错误');
//   }else{
//     console.log('写入成功');
//   }
// })

// 同步写入方法
const res = fs.writeFileSync('./file1.txt','你好')
console.log(res);

console.log('同步吗');