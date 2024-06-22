import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../../types/express';

interface JwtPayload {
    id: number;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret') as JwtPayload;
        req.user = { id: payload.id };
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};
