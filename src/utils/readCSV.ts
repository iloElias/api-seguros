// eslint-disable-next-line import/no-extraneous-dependencies
import { parse } from 'csv-parse/sync';
import { readFileSync } from 'fs';
import { InsuranceData } from '../interfaces/InsuranceData';

export const readCSV = (filePath: string): InsuranceData[] => {
  const fileContent = readFileSync(filePath);
  const records: InsuranceData[] = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
};
