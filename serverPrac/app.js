import http from 'http'
import fs from 'fs'
import path, { resolve } from 'path'
import url, { URL } from 'url'


function serveStaticFile(response, path, contentTpye, responseCode){
  fs.readFile(path, function(err, data){
    if(err){
      response.writeHead(500,{'content-type':'text/plain'})
      response.end('500-Internal Error')
    } else {
      response.writeHead(responseCode, {'content-type':contentTpye})
      response.end(data)
    }
  })
} //serveStaticFile 끝



const server = http.createServer(function(request, response){
  const url = request.url.toLowerCase();
  const reqSplit = request.url.split('?')[0]
  // const reqUrl = path.basename(request.url)
  console.log(path.basename(request.url))
  console.log(path.basename(request.method))
  switch (url) {
    case '/':
      serveStaticFile(response, path.join(resolve(),'server/index.html'),'text/html',200);
      console.log(url)
    break;
    case startsWith('/about'):
      serveStaticFile(response, path.join(resolve(),'server/about.html'),'text/html',200);
      console.log(url)
      break;
    case '/contact':
      serveStaticFile(response, path.join(resolve(),'server/contact.html'),'text/html',200);
      console.log(url)
      break;


      //나머지 파일
    case '/style.css':
      serveStaticFile(response, './server/style.css','text/css',200);
      // console.log(url)
      break;
    case '/script.js':
      serveStaticFile(response, './server/script.js','text/javascript',200);
      // console.log(url)
      break;


      //html구성에 들어가는 js파일 목록
    case '/inputserverhtml/index.js':
      serveStaticFile(response, './inputServerHtml/index.js','text/javascript',200)
      break;
    case '/inputserverhtml/about.js':
      serveStaticFile(response, './inputserverhtml/about.js','text/javascript', 200)
      break;
    case '/inputserverhtml/contact.js':
      serveStaticFile(response, './inputserverhtml/contact.js','text/javascript', 200)
      break;
    case '/inputserverhtml/404.js':
      serveStaticFile(response, './inputserverhtml/404.js','text/javascript', 200)
      break;


      //모듈모음
    case '/modules/tagmakecall.js':
      serveStaticFile(response, './modules/tagMakeCall.js', 'text/javascript',200)
      break;
    case '/modules/tagmakefor.js':
      serveStaticFile(response, './modules/tagMakeFor.js', 'text/javascript',200)
      break;
      
    default: //만약에 위의 조건에 부합하지 않는것이 있을 경우 default를 띄워준다.
    serveStaticFile(response, './server/404.html','text/html',404);
    console.log(url)
      break;
  } //switch 끝
}) //server 끝

server.listen(2080, ()=>{
  console.log('2080포트 정상작동중')
})