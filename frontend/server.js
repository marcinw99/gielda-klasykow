const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const pathMatch = require("path-match");

const port = process.env.PORT || 7777;
const route = pathMatch();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const CarRouteMatch = route("/klasyk/:id");

const disabledRoutes = ["/klasyk"];

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const CarParams = CarRouteMatch(pathname);

    if (disabledRoutes.includes(pathname)) {
      app.render(req, res, "/nie-znaleziono-strony");
    } else if (CarParams !== false) {
      app.render(req, res, "/klasyk", Object.assign(CarParams, query));
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
