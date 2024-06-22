import { Response } from 'express';
import { AuthenticatedRequest } from '../types/express';
import * as commentModel from '../models/commentModel';

export const getComments = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const comments = await commentModel.findAllComments();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
};

export const getCommentById = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const comment = await commentModel.findCommentById(Number(req.params.id));
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comment' });
    }
};

export const createComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const comment = await commentModel.createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comment' });
    }
};

export const updateComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const comment = await commentModel.updateComment(Number(req.params.id), req.body);
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update comment' });
    }
};

export const deleteComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const comment = await commentModel.deleteComment(Number(req.params.id));
        if (!comment) return res.status(404).json({ error: 'Comment not found' });
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comment' });
    }
};
