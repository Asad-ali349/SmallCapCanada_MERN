import express from 'express';
import { CreateText, TradeTextDetail, UpdateText } from '../controllers/tradeText.js';
const router= express.Router();

router.post('/',CreateText);
router.get('/',TradeTextDetail);
router.patch('/:id',UpdateText);


export default router;