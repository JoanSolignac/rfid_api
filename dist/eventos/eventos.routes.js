"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventos_controller_1 = __importDefault(require("./eventos.controller"));
const router = (0, express_1.Router)();
const controller = new eventos_controller_1.default();
// POST → registrar nuevo evento
router.post("/", (req, res) => controller.registrarEvento(req, res));
// GET → listar todos los eventos
router.get("/", (req, res) => controller.listarEventos(req, res));
exports.default = router;
