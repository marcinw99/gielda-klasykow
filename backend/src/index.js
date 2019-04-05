import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

import server from "./createServer";
import db from "./database";
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

// 2. Create a middleware that populates the user on each request
server.express.use(async (request, response, next) => {
  if (!request.userId) return next();
  const user = await db.query.user(
    { where: { id: request.userId } },
    "{ id, permissions, email, name }"
  );
  request.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: [process.env.FRONTEND_URL, process.env.FRONTEND_URL_DEV]
    },
    port: process.env.PORT
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
