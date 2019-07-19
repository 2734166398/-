var http=require("http")
var path=require("path")
  http.createServer((req,res)=>{
      //会将最后的一个参数转换为绝对路径
     // var oldpath=path.resolve("./框架/text/nott.js");
      //获取文件的扩展名
      //var oldpath=path.extname("dome.html");
    //路径的格式化
   // var oldpath=path.normalize("./fs/tt/sss////ssss/ttt")
   //将对象转化为路径
   var oldpath=path.format({
       root:"" 
   })
      console.log(oldpath);
     res.end();
  }).listen(3000)