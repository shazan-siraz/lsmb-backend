export interface Package {
  packageName: string;
  packagePrice: number;
  memberLimit: number;
  userLimit: number;
  status: "Enable" | "Disable";
  isDeleted: boolean;
}
