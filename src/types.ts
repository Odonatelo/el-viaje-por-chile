export type TourCategory = 
  | 'monument' 
  | 'history' 
  | 'nature' 
  | 'museum' 
  | 'food' 
  | 'art' 
  | 'walking'
  | 'secrets';

export type StopCategory = 
  | 'monument'
  | 'museum'
  | 'church'
  | 'plaza'
  | 'viewpoint'
  | 'nature'
  | 'gastronomy'
  | 'history'
  | 'art'
  | 'secret';

export interface SocialLinks {
  instagram?: string;
  youtube?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
  website?: string;
  spotify?: string;
}

export interface TourDocument {
  id: string;
  name: string;
  type: 'pdf' | 'brochure' | 'guide' | 'doc' | 'archive' | 'sheet';
  url: string;
  size?: string;
  description?: string;
}

export interface StopImage {
  id: string;
  url: string;
  caption?: string;
  author?: string;
  isPrimary?: boolean;
}

export interface StopAudio {
  type: 'ai_generated' | 'uploaded_mp3' | 'recorded' | 'external_url';
  url?: string;
  durationSeconds?: number;
  voiceName?: string;
  aiPromptUsed?: string;
  transcript?: string;
  fileSize?: string;
}

export interface TourStop {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  category: StopCategory;
  location: {
    lat: number;
    lng: number;
    address?: string;
  };
  triggerRadiusMeters: number;
  narrativeText: string;
  audio?: StopAudio;
  images: StopImage[];
  youtubeUrl?: string;
  socialLinks?: SocialLinks;
  documents: TourDocument[];
  tips?: string;
  trivia?: string;
  estimatedStayMinutes: number;
}

export interface TourAuthor {
  name: string;
  avatar?: string;
  role?: string;
  bio?: string;
  verified?: boolean;
  email?: string;
}

export interface Tour {
  id: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  city: string;
  country: string;
  category: TourCategory;
  language: string;
  durationMinutes: number;
  distanceKm: number;
  difficulty: 'easy' | 'moderate' | 'challenging';
  author: TourAuthor;
  authorEmail?: string;
  socialLinks: SocialLinks;
  generalDocuments: TourDocument[];
  stops: TourStop[];
  wikilocRoutes?: Array<{ name: string; url: string }>;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface AIScriptRequest {
  poiTitle: string;
  cityName: string;
  category?: string;
  tone?: 'historical' | 'dynamic' | 'mysterious' | 'family' | 'poetic' | 'insider';
  language?: string;
  length?: 'short' | 'standard' | 'deep';
  additionalNotes?: string;
}

export interface AIScriptResponse {
  narrativeText: string;
  subtitle: string;
  trivia: string;
  tips: string;
  estimatedStayMinutes: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  googleId?: string;
  role: 'creator' | 'admin' | 'explorer';
  isMember: boolean;
  memberType: 'none' | 'annual_paid' | 'consulting_free';
  membershipExpiresAt?: string;
  toursCount?: number;
  bio?: string;
  isOwner?: boolean;
  achpiStatus?: 'none' | 'pending' | 'approved';
  achpiCode?: string;
  routeLimit?: number;
  routeUsage?: number;
}

export interface AchpiInscription {
  id: string;
  name: string;
  email: string;
  region: string;
  experience: string;
  courseWithElViaje?: string;
  motivation: string;
  status: 'pending' | 'approved' | 'rejected';
  memberCode?: string;
  createdAt: string;
  reviewedAt?: string;
}

export interface AdminNotification {
  id: string;
  recipient: string;
  subject: string;
  body: string;
  createdAt: string;
}

export interface MercadoPagoConfig {
  publicKey: string;
  accessToken: string;
  webhookUrl?: string;
  currency: 'CLP';
  singleTourPriceClp: number;
  annualMembershipPriceClp: number;
  enterprisePriceClp: number;
  isLiveMode: boolean;
  ownerEmail: string;
  ownerName: string;
}

export interface MercadoPagoPaymentRecord {
  id: string;
  payerEmail: string;
  payerName: string;
  planId: 'single_tour' | 'annual_membership' | 'enterprise_pack';
  planTitle: string;
  amountClp: number;
  status: 'approved' | 'pending' | 'rejected' | 'in_process';
  dateCreated: string;
  paymentMethod: string;
  mercadoPagoPaymentId?: string;
  initPointUrl?: string;
}
