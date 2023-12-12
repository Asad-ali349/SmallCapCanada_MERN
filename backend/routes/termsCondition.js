import express from 'express';
import { CreateText, TermsConditionDetail, UpdateText } from '../controllers/TermCondtion.js';
const router= express.Router();

router.post('/',CreateText);
router.get('/',TermsConditionDetail);
router.patch('/:id',UpdateText);


export default router;