import express, { Application } from "express";
import dotenv from "dotenv";
import eventosRoutes from "./eventos/eventos.routes";

export  class App {
    public app: Application;
    private readonly port: number;

    constructor(){
        dotenv.config();
        this.app = express();
        this.port = process.env.PORT ? Number(process.env.PORT) : 3000;

        this.InitializeMiddlewares();
        this.InitializeRoutes();
    }

    private InitializeRoutes(): void {
        this.app.use("/api/eventos", eventosRoutes);
    }

    private InitializeMiddlewares(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }


    public listen(): void {
        const host: string = "0.0.0.0";
        console.log("Railway PORT:", process.env.PORT);
        this.app.listen(this.port, host, () => {
            console.log(`Server is running on http://${host}:${this.port}`);
        });
    }

}