import http from 'http'
import serveStatic from './utils/serveStatic.js'
import sendJsonData from './utils/sendJsonData.js'

const port = 8000
const __dirname=process.cwd()

const server = http.createServer(async (req, res) => {
    console.log(`req: ${req.url}`)
    await serveStatic(req, res);
    if(req.url==='/api' && req.method==="GET"){
        await sendJsonData(res,__dirname)
    }
})
server.listen(port, () => console.log('server started at http://localhost:8000'))