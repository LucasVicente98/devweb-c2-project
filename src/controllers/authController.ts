import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const generateToken = (userId: number) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '1h',
    });
};

export const register = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, name, password: hashedPassword },
        });
        res.status(201).json({ token: generateToken(user.id) });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user.' });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        res.json({ token: generateToken(user.id) });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login user.' });
    }
};
