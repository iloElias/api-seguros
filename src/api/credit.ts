import express from 'express';
import { readCSV } from '../utils/readCSV';
import { searchData } from '../utils/searchData';
import { InsuranceData } from '../interfaces/InsuranceData';

const router = express.Router();

type SearchResponse = InsuranceData[];

router.post<{}, SearchResponse>('/search', (req, res) => {
  const data = readCSV('./data/car_insurance_claim.csv');
  const query: Partial<InsuranceData> = req.body;
  const results = searchData(data, query);
  res.json(results);
});

export default router;
