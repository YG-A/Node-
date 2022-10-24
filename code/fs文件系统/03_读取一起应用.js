const fs = require('fs');

fs.readFile('./sourceFile.txt','utf-8',(rErr,data)=>{
  if (rErr) throw rErr;
  console.log(data);
  const dataArr = data.split(' ')
  console.log(dataArr);
  const newArr = dataArr.map(item =>{
    return item.replace('=','：')
  })
  const newStr = newArr.join('\r\n')
  fs.writeFile('./targetFile.txt',newStr,(wErr)=>{
    if(wErr){
      console.log('写入错误');
    }else{
      console.log('写入成功');
    }
  })
})
