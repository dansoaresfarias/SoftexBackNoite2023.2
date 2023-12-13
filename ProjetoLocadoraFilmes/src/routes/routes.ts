import { Application } from "express";
import HomeRoutes from "./home.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/alohaFilmes", HomeRoutes);
    //app.use("/api/tutorials", tutorialRoutes);
  }
}