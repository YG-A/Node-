const fs = require('fs')


// 参数：路径,编码,回调，异步的读取
// fs.readFile('./file.txt','utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// 这个是同步的方法，只有读完之后，才会执行后面的代码
let readContent = fs.readFileSync('./file.txt','utf-8')
console.log(readContent);
console.log('同步吗');