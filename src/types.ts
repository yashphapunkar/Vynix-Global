export interface Product {
  id: string;
  name: string;
  category: "automotive" | "coffee";
  description: string;
  longDescription: string;
  image: string;
  hsCode: string;
  moq: string;
  specifications: Record<string, string>;
  packaging: string[];
}

export interface BasketItem {
  product: Product;
  quantity: number;
  unit: string;
}

export interface InquiryForm {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  category: "automotive" | "coffee" | "all";
  requirementDetail: string;
  items: BasketItem[];
}

export interface SavedInquiry extends InquiryForm {
  id: string;
  date: string;
  status: "pending" | "reviewed" | "completed";
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "shipping" | "compliance";
}

export interface Certification {
  name: string;
  authority: string;
  description: string;
  iconName: string;
}
