require("dotenv").config({ path: "variables.env" });
import server from "./createServer";

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    },
    port: process.env.PORT
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
