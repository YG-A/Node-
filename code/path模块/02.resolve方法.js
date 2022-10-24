const path = require('path')

const basepath = '../User/why'
const filename = 'profileConfig.txt'

const filePath1 = path.join(basepath,filename)// ..\User\why\profileConfig.txt
console.log(filePath1);

const filePath2 = path.resolve(basepath,filename)
console.log(filePath2);

// resolve的例子
console.log(path.resolve('/a', '/b')) // /b  解析到第一个/b 直接返回 /b
console.log(path.resolve('/a', 'b')) // /a/b  解析到/a 将解析后的/a/b返回
console.log(path.resolve('a', 'b', '/')) // / 解析到 / 直接返回不再进行
console.log(path.resolve('a', 'b')) // /Users/tianleilei/Desktop/testProject/node/a/b 未解析到 / 所以使用到当前工作目录
console.log(path.resolve('/a', '../b')) // /b 遵循路径级别规则，解析到/a停止，当解析../向上一级，返回/b

/* 
  resolve方法不好理解
  可以总结如下记忆：

  从后向前看
  字符以 / 开头不会拼接直接返回，因为已经是绝对路径（绝对路径就结束）
  字符以 ../ 开头拼接前面的路径，且不含最后一节字符（路径解析规则）
  字符以 ./ 开头直接拼接前面的路径（路径解析规则）
  如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录（最终要绝对路径）
*/