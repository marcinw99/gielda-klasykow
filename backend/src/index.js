import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

import server from "./createServer";
require("dotenv").config({ path: "variables.env" });

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

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
