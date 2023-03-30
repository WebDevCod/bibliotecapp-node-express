import express from "express";
import indexRoutes from "./routes/index.routes.js";
import { create } from "express-handlebars";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));

const hbs = create({
  layoutsDir: join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.use(express.static(join(__dirname, "public")));

export default app;
