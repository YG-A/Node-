const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname,'/User')
// 创建文件夹，
console.log(dirname);

// 判断文件夹是否存在,还有个exists的异步方法，不推荐使用(因为判断这种逻辑，通常立刻需要，而不是)
if(!fs.existsSync(dirname)){
  fs.mkdirSync(dirname)
}



