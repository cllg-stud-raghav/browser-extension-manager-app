export default async function sendResponse(res,statusCode,ContentType,payLoad){
    res.statusCode=statusCode;
    res.setHeader('Content-Type',ContentType);
    res.end(payLoad);
}