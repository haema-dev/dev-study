 import { Server } from 'socket.io';

   const ioHandler = (req, res) => {
     if (!res.socket.server.io) {
       console.log('New Socket.io server...');
       const io = new Server(res.socket.server);
       res.socket.server.io = io;

       io.on('connection', socket => {
         socket.on('message', ({ name, message }) => {
           io.emit('message', { name, message });
         });
       });
     }
     res.end();
   };

   export default ioHandler;