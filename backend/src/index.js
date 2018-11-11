import server from "./createServer";

server.start(deets => {
  console.log(`Server is now running on port http:/localhost:${deets.port}`);
});
