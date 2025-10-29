import { Request, Response } from "express";
import EventosService from "./eventos.service";

export default class EventosController {
  private eventosService: EventosService;

  constructor() {
    this.eventosService = new EventosService();
  }

  async registrarEvento(req: Request, res: Response): Promise<void> {
    try {
      const { tagId } = req.body;

      if (!tagId) {
        res.status(400).json({ error: "El campo 'tagId' es obligatorio" });
        return;
      }

      const nuevoEvento = await this.eventosService.createEvent(tagId);
      res.status(201).json(nuevoEvento);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al registrar el evento" });
    }
  }

  async listarEventos(_req: Request, res: Response): Promise<void> {
    try {
      const eventos = await this.eventosService.getAllEvents();
      res.status(200).json(eventos);
    } catch (error) {
      console.error("Error al listar eventos:", error);
      res.status(500).json({ error: "Error al obtener los eventos" });
    }
  }
}
