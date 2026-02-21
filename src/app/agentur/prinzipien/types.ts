import { ReactNode } from "react";

export interface Principle {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
  isEven: boolean;
}
