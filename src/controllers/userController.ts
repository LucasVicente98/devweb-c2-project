import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../types/express';
import * as userModel from '../models/userModel';

export const getUsers = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const users = await userModel.findAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

export const getUserById = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user = await userModel.findUserById(Number(req.params.id));
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userModel.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user = await userModel.updateUser(Number(req.params.id), req.body);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user = await userModel.deleteUser(Number(req.params.id));
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
