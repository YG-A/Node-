const fs = require('fs')
const path = require('path')

/* 
  flag的值有很多：https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system_flags
  flag标记是影响着文件的读写

  w 打开文件写入，默认值；覆盖
  w+打开文件进行读写，如果不存在则创建文件；覆盖

  r+ 打开文件进行读写，如果不存在那么抛出异常；覆盖
  r打开文件读取，读取时的默认值；

  a打开要写入的文件，将流放在文件末尾。如果不存在则创建文件；追加
  a+打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件；追加
*/
const filePath = path.join(__dirname,'./file.txt')

// 配置项是可选的，可以不传
const config = {
  flag: 'a+',// 追加写入
  encoding: 'utf8',// 默认utf8
}

fs.writeFile(filePath,'追加还是覆盖3',config,err=>{
  console.log(err);
})