import { Router } from "express";
import EventosController from "./eventos.controller";

const router = Router();
const controller = new EventosController();

// POST → registrar nuevo evento
router.post("/", (req, res) => controller.registrarEvento(req, res));

// GET → listar todos los eventos
router.get("/", (req, res) => controller.listarEventos(req, res));

export default router;
