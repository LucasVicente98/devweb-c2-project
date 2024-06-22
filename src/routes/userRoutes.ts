import { Router } from 'express';
import {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} from '../controllers/userController';
import { authenticateToken } from '../controllers/middleware/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;
