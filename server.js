import http from "http";
import serveStatic from "./utils/serveStatic.js";
import handleGet from "./routers/handleGet.js";

const port = 8000;

const server = http.createServer(async (req, res) => {
  console.log(`req: ${req.url}`);
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all domains
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (!(req.url === "/api")) {
    await serveStatic(req, res);
  } else if (req.url === "/api" && req.method === "GET") {
    await handleGet(res);
  }
});
server.listen(port, () =>
  console.log("server started at http://localhost:8000")
);
