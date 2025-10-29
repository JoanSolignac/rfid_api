"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventos_service_1 = __importDefault(require("./eventos.service"));
class EventosController {
    eventosService;
    constructor() {
        this.eventosService = new eventos_service_1.default();
    }
    async registrarEvento(req, res) {
        try {
            const { tagId } = req.body;
            if (!tagId) {
                res.status(400).json({ error: "El campo 'tagId' es obligatorio" });
                return;
            }
            const nuevoEvento = await this.eventosService.createEvent(tagId);
            res.status(201).json(nuevoEvento);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al registrar el evento" });
        }
    }
    async listarEventos(_req, res) {
        try {
            const eventos = await this.eventosService.getAllEvents();
            res.status(200).json(eventos);
        }
        catch (error) {
            console.error("Error al listar eventos:", error);
            res.status(500).json({ error: "Error al obtener los eventos" });
        }
    }
}
exports.default = EventosController;
