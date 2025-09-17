import express from 'express';
import { 
    registerUser,
    getAllUser,
    getUserByID
} from '../controller/userController.js'; 

const router = express.Router();

// routes
router.post('/register', registerUser);
router.get('/', getAllUser);
router.get('/:id', getUserByID);

export default router;