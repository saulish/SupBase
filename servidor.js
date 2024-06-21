// server.js
// Importa el módulo http de Node.js
const http = require('http');

// Define el puerto en el que el servidor escuchará
const PORT = 3000;

// Crea una función para manejar las solicitudes
const requestHandler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola, Mundo!\n');
};

// Crea el servidor
const server = http.createServer(requestHandler);

// Hace que el servidor escuche en el puerto especificado
server.listen(PORT, (err) => {
  if (err) {
    return console.log('Algo salió mal:', err);
  }
  console.log(`Servidor está escuchando en el puerto ${PORT}`);
});
