var http=require("http");
var url=require("url");
var fs =require("fs");
var arr={
  tname:"gao",
  tage:"30"
}
http.createServer((req,res)=>{
  console.log(re)
  res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
 
  fs.readFile("./dome.html",(err,data)=>{
    if(req.url=="./favicon.ico"){
      return
    }
  var art=url.parse(req.url,true).query;
  if(arr.tname == art.aname && arr.tage == art.aage){
    console.log("成功")
  } else{
     console.log("失败")
  }
  res.end(data);
    
  })
   // var old=url.parse(req.url).query;
    //url.parse(解析地址栏) 如果传入第二个参数为true时，则会转换为对象，没有第二个参数为flase,则是字符串。
  // var oldt=url.parse(req.url,true);
   //console.log(oldt);

   //   解析      把多个字段合并
   //var query=url.resolve("http://127.0.0.1:3000","/aa/bb");
   //console.log(query)

   //序列化   参数 ---对象
//    var query=url.format({

//    });
   // console.log(req.url);


}).listen(3000)