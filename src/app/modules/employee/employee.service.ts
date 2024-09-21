import { Employee } from "./employee.interface";
import { EmployeeModel } from "./employee.model";

const createEmployeeIntoDB = async (employee: Employee) => {
  const result = await EmployeeModel.create(employee);
  return result;
};

const getAllEmployeeFromDB = async () => {
  const result = await EmployeeModel.find();
  return result;
};

export const employeeServices = {
  createEmployeeIntoDB,
  getAllEmployeeFromDB,
};
