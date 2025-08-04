export default function getContentType(ext){
    const mimeTypes = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf':  'font/ttf',
  '.otf':  'font/otf',
  '.eot':  'application/vnd.ms-fontobject',
  '.mp3':  'audio/mpeg',
  '.mp4':  'video/mp4',
  '.pdf':  'application/pdf',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
  '.zip':  'application/zip',
  '.wasm': 'application/wasm'
};
return mimeTypes[ext] || 'text/html'
}