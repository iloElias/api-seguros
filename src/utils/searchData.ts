import { InsuranceData } from '../interfaces/InsuranceData';

export const searchData = (data: InsuranceData[], query: Partial<InsuranceData>): InsuranceData[] => {
  return data.filter(item =>
    (query.AGE ? item.AGE === query.AGE : true) &&
    (query.GENDER ? item.GENDER === query.GENDER : true) &&
    (query.DRIVING_EXPERIENCE ? item.DRIVING_EXPERIENCE === query.DRIVING_EXPERIENCE : true) &&
    (query.EDUCATION ? item.EDUCATION === query.EDUCATION : true) &&
    (query.INCOME ? item.INCOME === query.INCOME : true) &&
    (query.VEHICLE_YEAR ? item.VEHICLE_YEAR === query.VEHICLE_YEAR : true) &&
    (query.ANNUAL_MILEAGE ? item.ANNUAL_MILEAGE === query.ANNUAL_MILEAGE : true) &&
    (query.VEHICLE_TYPE ? item.VEHICLE_TYPE === query.VEHICLE_TYPE : true),
  );
};
