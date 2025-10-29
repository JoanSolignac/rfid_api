"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const eventos_routes_1 = __importDefault(require("./eventos/eventos.routes"));
class App {
    app;
    port;
    constructor() {
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT ? Number(process.env.PORT) : 3000;
        this.InitializeMiddlewares();
        this.InitializeRoutes();
    }
    InitializeRoutes() {
        this.app.use("/api/eventos", eventos_routes_1.default);
    }
    InitializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    listen() {
        console.log("Railway PORT:", process.env.PORT);
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.App = App;
