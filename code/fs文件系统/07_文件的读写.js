const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'./file.txt')

// 配置项是可选的，可以不传
const config = {
  flag: 'a+',// 追加写入
  encoding: 'utf8',// 默认utf8
}

// fs.readFile(filePath,config,(err,data)=>{
//   console.log(data);
// })


fs.writeFile(filePath,'你的我的她的',config,(err)=>{
  if(err){
    console.log(err);
  }
})