import sendJsonData from "../utils/sendJsonData.js"
import sendResponse from "../utils/sendResponse.js";

export default async function handleGet(res){
    try{
        const data=await sendJsonData();
        sendResponse(res,200,'application/json',JSON.stringify(data))
    }catch(err){
        throw new Error(err)
    }
}