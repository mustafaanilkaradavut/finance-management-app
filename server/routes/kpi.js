import express from 'express';
import FinanceManagementKpis from '../models/KPI.js';

const router = express.Router();

router.get('/kpis', async (req, res) => {
   try {
      const kpis = await FinanceManagementKpis.find();
      res.status(200).json(kpis);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
});

export default router;
