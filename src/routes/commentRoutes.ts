import { Router } from 'express';
import {
    getComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
} from '../controllers/commentController';
import { authenticateToken } from '../controllers/middleware/authMiddleware';

const router = Router();

router.get('/', getComments);
router.get('/:id', getCommentById);
router.post('/', authenticateToken, createComment);
router.put('/:id', authenticateToken, updateComment);
router.delete('/:id', authenticateToken, deleteComment);

export default router;
