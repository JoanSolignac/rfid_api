"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class EventosService {
    prisma;
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    ;
    async createEvent(tagId) {
        return await this.prisma.rfidEvent.create({
            data: {
                tagId
            }
        });
    }
    async getAllEvents() {
        return await this.prisma.rfidEvent.findMany({
            orderBy: { timestamp: "desc" }
        });
    }
}
exports.default = EventosService;
