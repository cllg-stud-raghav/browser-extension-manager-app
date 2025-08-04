import fs from "node:fs/promises"
import path from "node:path"
import sendResponse from "./sendResponse.js";

export default async function sendJsonData(res,dirname){
    const sourceFile=path.join(dirname,'data.json')
    const reqFile= await fs.readFile(sourceFile);
    try{
         await sendResponse(res,200,'application/json',reqFile)
    }catch(err){
        console.log(err);
    }
}