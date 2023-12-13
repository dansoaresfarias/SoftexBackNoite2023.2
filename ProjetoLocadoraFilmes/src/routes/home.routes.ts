import { Router, Request, Response } from "express";

class HomeRoutes {

    router = Router();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get("/", (req: Request, res: Response) => { return res.status(200).json("Olá mundo!") });

        this.router.get("/filmes", (req: Request, res: Response) => { return res.status(200).json("Oi Fernando, não temos filmes cadastrados!") });
    }

}

export default new HomeRoutes().router;