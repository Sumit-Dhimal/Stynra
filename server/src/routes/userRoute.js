import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { 
    registerUser,
    getAllUser,
    getUserByID,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controller/userController.js'; 

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Private routes
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// (Optional: protect these if needed)
router.get('/', protect, getAllUser);
router.get('/:id', protect, getUserByID);

export default router;
