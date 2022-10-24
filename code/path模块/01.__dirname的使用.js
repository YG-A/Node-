const fs = require('fs')


/* 
  之前写相对路径'./file.txt'
  在node环境下运行时，相对路径并不是当对于本js文件的目录
  而是你终端运行node命令所在的目录，如果终端的目录不是本js的目录
  那么一定会报错

  所以写路径最好用__dirname拼接，__dirname表示当前js文件所在的目录的全称
*/
console.log(__dirname);
fs.readFile(__dirname + '/file.txt','utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
