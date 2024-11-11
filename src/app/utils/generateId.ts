import { EmployeeModel } from "../modules/employee/employee.model";

const findLastEmployeeId = async (branchEmail: string) => {
  const lastEmployee = await EmployeeModel.findOne(
    { branchEmail: branchEmail },
    { employeeId: 1, _id: 0 } // Corrected projection
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastEmployee?.employeeId ? lastEmployee.employeeId : undefined;
};

export const generateEmployeeId = async (email: string) => {
  let currentId = 0;
  const lastEmployeeId = await findLastEmployeeId(email);

  if (lastEmployeeId) {
    currentId = lastEmployeeId;
  }

  const incrementId = currentId + 1;

  return incrementId;
};
