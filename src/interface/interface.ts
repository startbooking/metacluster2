
export interface Business {
  id: number;
  name: string;
  phone:string;
  email:string;
  category: string;
  address: string;
  rating: number;
  image: string;
  images: [];
  amenities:[];
  specialties:[];
  description: string;
  is_sponsor: boolean;
  price?: string;
  taxes?: number;
  tax_percentage?: number;
  review_count?:number;
  type_category_id?:number;
}

export interface FeaturedBusiness {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: string;
  taxes: number;
  tax_percentage: number;
  phone: string;
  email: string;
  website: string;
  address: string;
  schedule: string;
  capacity: string;
  images: string[];
  amenities: string[];
  description: string;
  is_sponsor: boolean;
}

export interface Experience {
  id: string;
  name: string;
  category: string;
  duration: string;
  rating: number;
  price: string;
  max_people: number;
  image: string;
  description: string;
}

export interface ServicesData {
  id: number;
  name: string;
  location: string;
  category: string;
  short_description: string;
  rating: string;
  price_range: number;
  phone: string;
  schedule: string;
  capacity: number;
  services: [];
  image: string;
  is_vip: boolean;
}

export interface EventsData {
  id:number;
  title:string;
  date:string;
  time:string;
  description:string;
  location:string;
  price:string;
  start_date:string;
  end_date:string;
  is_free:boolean;
  max_capacity:string;
  category:string;
  image:string;
  images:[];
  organizer:string;
  includes:[];
  requirements:[];
}