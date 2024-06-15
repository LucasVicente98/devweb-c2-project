import { Request, Response } from 'express';
import * as postModel from '../models/postModel';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await postModel.findAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await postModel.findPostById(Number(req.params.id));
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        const post = await postModel.createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

export const updatePost = async (req: Request, res: Response) => {
    try {
        const post = await postModel.updatePost(Number(req.params.id), req.body);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const post = await postModel.deletePost(Number(req.params.id));
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};
