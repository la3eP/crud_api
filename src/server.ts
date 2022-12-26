import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res)=> {
    console.log(`${req.method}`);
    if (req.method === 'GET') {
        
    };
});
server.listen(PORT, () =>{
    console.log(`Server starts on http://localhost:${PORT}`);
});