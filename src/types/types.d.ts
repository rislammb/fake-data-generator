export interface UserRecord {
  index: number;
  id: string;
  name: string;
  address: string;
  phone: string;
}

export type Region = "USA" | "Poland" | "Georgia";

export interface ErrorConfig {
  delete: boolean;
  add: boolean;
  swap: boolean;
}
