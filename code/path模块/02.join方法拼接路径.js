const path = require('path')
const fs = require('fs')

// ../ 会抵消前面的路径，从左往右依次拼接
// 在node环境下，凡事涉及路径的拼接都使用path模块的join方法
const pathStr = path.join('/a','/b/c','../../','./d','e')
console.log(pathStr);

fs.readFile(path.join(__dirname,'/file.txt'),'utf-8',(err,data)=>{
  if(err) throw err
  console.log(data);
})


