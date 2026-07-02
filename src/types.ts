export interface Project {
  id: string;
  title: string;
  category: "Web App" | "E-Commerce" | "Brand Site" | "SaaS";
  client: string;
  image: string;
  description: string;
  year: string;
  tags: string[];
  link: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  colorClass: string; // Tailored overlay color
  gradientClass: string;
  delay: number;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EstimatorOption {
  id: string;
  label: string;
  description: string;
  priceWeight: number; // base factor
}

export interface EstimatorStep {
  id: string;
  title: string;
  subtitle: string;
  type: "single" | "multiple";
  options: EstimatorOption[];
}
