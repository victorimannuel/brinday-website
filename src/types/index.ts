export type RequestType = 
  | "General Inquiry" 
  | "Quote Request" 
  | "Technical Support" 
  | "Partnership Opportunity";

export const REQUEST_TYPES: RequestType[] = [
  "General Inquiry",
  "Quote Request",
  "Technical Support",
  "Partnership Opportunity"
];

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
}
