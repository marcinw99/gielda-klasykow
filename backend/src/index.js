import cookieParser from "cookie-parser";

import server from "./createServer";
require("dotenv").config({ path: "variables.env" });

server.express.use(cookieParser());

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
