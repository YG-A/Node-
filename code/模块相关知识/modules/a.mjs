let a = 1

// 5s后使得导出的值改为10
setTimeout(()=>{
  a = 10
},5000) 

export {
  a
}