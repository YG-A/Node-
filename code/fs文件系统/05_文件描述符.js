const fs = require('fs')
const path = require('path')

/* 
  文件描述符号
*/
const filePath = path.join(__dirname,'./file.txt')

// 读取一个文件的描述符
fs.open(filePath,(err,fd)=>{
  console.log(fd); // 3

  // 通过文件描述符，获取文件元信息，这样就是说，一个文件描述符可以唯一标识一个文件，可以代替文件路径
  fs.fstat(fd,(err,info)=>{
    console.log(info);
  })
})