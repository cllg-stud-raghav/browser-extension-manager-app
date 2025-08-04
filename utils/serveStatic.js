import path from "node:path"
import fs from "node:fs/promises"
import setContentType from "./setContentType.js";
import sendResponse from "./sendResponse.js";

const __dirname = process.cwd()

export default async function serveStatic(req, res) {
    const sourceFile = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(sourceFile).toLowerCase();
    // console.log(ext);
    const readFile = await fs.readFile(sourceFile)
    const contentType = setContentType(ext)
    try {
        await sendResponse(res, 200, contentType, readFile);
    } catch (err) {
        console.log('err')

    }
}