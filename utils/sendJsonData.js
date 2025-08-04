import fs from "node:fs/promises"
import path from "node:path"

export default async function sendJsonData(){
    const sourceFile=path.join('data','data.json')
    try{
        const reqFile= await fs.readFile(sourceFile);
        return JSON.parse(reqFile)
    }catch(err){
        console.log(err);
        return ;
    }
}