export interface PartnerLinks {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  [key: string]: string | undefined;
}

export interface PartnerContactInfo {
  [key: string]: any;
}

export interface Partner {
  id?: number;
  nom_partenaire: string;
  description: string;
  email: string;
  telephone: string;
  adresse: string;
  site_web: string;
  actif?: boolean;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  type_partenaire?: 'government' | 'telecom' | 'banking' | 'transport' | 'other';
  date_deb: string;
  date_fin: string;
  liens_externes?: PartnerLinks;
  info_contacte?: PartnerContactInfo;
  priorite_affichage?: number;
}
