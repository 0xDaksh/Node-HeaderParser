var express = require('express'),
    app = express();
    app.get('/', (req, res)=>{
        res.send('Ridges Here! <br> go to /i');
    })
    
    app.get('/i', (req, res)=>{
     var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||req.connection.socket.remoteAddress; 
     var info = {
         'ipaddress': ip,
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
     };
     res.json(info);
     
    });
    
    app.listen(process.env.PORT);