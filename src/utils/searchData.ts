import { InsuranceData } from '../interfaces/InsuranceData';

export const searchData = (data: InsuranceData[], query: Partial<InsuranceData>): InsuranceData[] => {
  return data.filter(item => 
    (query.age ? item.age === query.age : true) &&
    (query.gender ? item.gender === query.gender : true) &&
    (query.drivingExperience ? item.drivingExperience === query.drivingExperience : true) &&
    (query.education ? item.education === query.education : true) &&
    (query.income ? item.income === query.income : true) &&
    (query.vehicleYear ? item.vehicleYear === query.vehicleYear : true) &&
    (query.annualMileage ? item.annualMileage === query.annualMileage : true) &&
    (query.vehicleType ? item.vehicleType === query.vehicleType : true),
  );
};
