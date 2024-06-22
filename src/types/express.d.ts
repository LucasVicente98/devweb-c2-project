import { PrismaClient } from '@prisma/client';
import { Request } from 'express';

interface UserPayload {
    id: number;
}

export interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}
