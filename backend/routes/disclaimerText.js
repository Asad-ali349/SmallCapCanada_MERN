import express from 'express';
import { CreateText, DisclaimerTextDetail, UpdateText } from '../controllers/disclaimerText.js';
const router= express.Router();

router.post('/',CreateText);
router.get('/',DisclaimerTextDetail);
router.patch('/:id',UpdateText);


export default router;