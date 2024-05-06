import express from 'express';
import { readCSV } from '../utils/readCSV';
import { InsuranceData } from '../interfaces/InsuranceData';

const router = express.Router();

router.get('/:id', (req, res) => {
  const data: InsuranceData[] = readCSV('data/car_insurance_claim.csv');
  console.log('Total records loaded:', data.length);

  const userId = req.params.id;
  console.log('Searching for user ID:', userId);

  const user = data.find(item => item.ID === userId);
  console.log('User found:', user);

  if (user && user.CREDIT_SCORE !== undefined) {
    if (user.CREDIT_SCORE.toString() === '') {
      res.json({ message: 'O usuário não tem credit score registrado' });
    } else {
      res.json({ credit_score: user.CREDIT_SCORE });
    }
  } else {
    res.status(404).json({ message: `Nenhum usuário com o ID ${userId} encontrado` });
  }
});

export default router;
