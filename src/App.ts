import express, { Application } from "express";
import dotenv from "dotenv";

export  class App {
    public app: Application;
    private readonly port: number;

    constructor(){
        dotenv.config();
        this.app = express();
        this.port = process.env.PORT ? Number(process.env.PORT) : 3000;

        this.InitializeMiddlewares();
    }

    private InitializeMiddlewares(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }


    public listen(): void{
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}