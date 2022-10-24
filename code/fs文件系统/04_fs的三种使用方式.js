const fs = require('fs')
const path = require('path')

// 获取一个文件的元信息(大小，创建时间，修改时间等等)

// 1.异步方式获取信息，不能等待会掉的执行
fs.stat(path.join(__dirname,'./file.txt'),(err,stats)=>{
  if(err){
    console.log(err);
    return
  }else {
    console.log(stats);
  }
})

// 2.同步方式,后续代码需要等待文件元信息读取完毕
const fileMeta = fs.statSync(path.join(__dirname,'./file.txt'))
console.log(fileMeta);

// 3.Promise方式（要稍微新的node版本才能用）
fs.promises.stat(path.join(__dirname,'./file.txt')).then(stats =>{
  console.log(stats);
}).catch((err)=>{
  console.log(err);
})
