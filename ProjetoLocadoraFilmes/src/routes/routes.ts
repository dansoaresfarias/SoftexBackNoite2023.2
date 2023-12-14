import { Application } from "express";
import homeRoutes from "./home.routes";
import generoRoutes from "./genero.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/alohaFilmes", homeRoutes);
    app.use("/alohaFilmes", generoRoutes)
  }
}
