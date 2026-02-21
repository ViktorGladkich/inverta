import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
  src?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}
