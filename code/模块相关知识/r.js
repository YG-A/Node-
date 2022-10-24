let obj = require('./modules/require导入方式.js')

console.log(obj.a);

setTimeout(()=>{
  console.log(obj.a);
},5000)