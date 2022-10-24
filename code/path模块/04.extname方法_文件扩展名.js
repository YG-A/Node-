const path = require('path')

const filePath = '/a/b/c/index.xxxxadad.xad'

const exFileName = path.extname(filePath)

console.log(exFileName);// index.html,文件名与后缀