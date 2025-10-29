import { PrismaClient } from "@prisma/client"

export default class EventosService {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    };

    async createEvent(tagId: string) {
        return await this.prisma.rfidEvent.create({
            data: {
                tagId
            }
        })
    }

    async getAllEvents(){
        return await this.prisma.rfidEvent.findMany({
            orderBy: { timestamp: "desc" }
        });
    }

}