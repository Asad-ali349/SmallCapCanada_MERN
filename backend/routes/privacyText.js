import express from 'express';
import { CreateText, PrivacyTextDetail, UpdateText } from '../controllers/privacyText.js';
const router= express.Router();

router.post('/',CreateText);
router.get('/',PrivacyTextDetail);
router.patch('/:id',UpdateText);


export default router;