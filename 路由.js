//模块   抛出（暴露）
//module.exports与exports default的区别
//1、exports是module.exports的引用
//2、module.exports默认是一个空对象，当然module.exports必须是一个空对象， 
//内置模块   外置模块

//node_modules  项目依赖     npm包管理工具

//router  路由 
function showIndex(req,res){
     res.end("首页")
 }
 function showAbout(req,res){
     res.end("关于")
 }
 function showNew(req,res){
     res.end("新闻")
 }
 function show404(req,res){
     res.end("404")
 }
 exports.showIndex=showIndex
 exports.showAbout=showAbout
 exports.showNew=showNew
 exports.show404=show404