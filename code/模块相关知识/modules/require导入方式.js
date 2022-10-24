let obj = {
  a: 8
}

// 5s后使得导出的值改为10
setTimeout(()=>{
  obj.a = 88
},5000) 

module.exports = obj