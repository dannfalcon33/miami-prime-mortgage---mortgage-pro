export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface LoanType {
  title: string;
  description: string;
  icon: string;
}

export interface CalculatorState {
  amount: number;
  downPayment: number;
  interestRate: number;
  years: number;
}
