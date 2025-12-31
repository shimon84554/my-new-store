import http from 'http';


export function mySer(){
    const server = http.createServer((req,res)=>{

        res.writeHead(200,{'content-type': 'text/html'});


       
            res.write('the server is rutting...');
            res.end();
        
    })
    server.listen(3000,()=> console.log('the server run'));
}

