export interface InsuranceData {
  ID: string;
  AGE: string;
  GENDER: string;
  RACE: string;
  DRIVING_EXPERIENCE: string;
  EDUCATION: string;
  INCOME: string;
  CREDIT_SCORE: number;
  VEHICLE_OWNERSHIP: string;
  VEHICLE_YEAR: string;
  MARRIED: string;
  CHILDREN: string;
  POSTAL_CODE: string;
  ANNUAL_MILEAGE: number;
  VEHICLE_TYPE: string;
  SPEEDING_VIOLATIONS: number;
  DUIS: number;
  PAST_ACCIDENTS: number;
  OUTCOME: number;
}

export interface CreditScoreResponse {
  CREDIT_SCORE: number;
}
