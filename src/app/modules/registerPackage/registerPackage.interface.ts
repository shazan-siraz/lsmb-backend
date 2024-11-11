export interface RegisteredPackage {
  packageName: string;
  packagePrice: number;
  memberLimit: number;
  userLimit: number;
  status: "Enable" | "Disable";
  isDeleted: boolean;
}