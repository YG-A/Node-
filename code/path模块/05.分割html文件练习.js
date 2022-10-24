const fs = require('fs');
const path = require('path');

// \s 查找空白字符 \S查找非空白字符
const regStyle = /<style>([\s\S]*)<\/style>/
const regScript = /<script>([\s\S]*)<\/style>/

// 文件路径
const filePath = path.join(__dirname,'./index.html')
fs.readFile(filePath,'utf8',(err,data)=>{
  if(err){
    console.log(err);
  }else{
    // 1.先匹配出样式，写入index.css
    cssStr = data.match(regStyle)[1]
    fs.writeFile(path.join(__dirname,'./index.css'))
    
    // 2.匹配脚本，写入index.js
    scriptStr = data.match(regScript)[1]
  }
})
