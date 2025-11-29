import { apiClient } from './api';
import { Partner } from '@/types/partner';

export const partnerService = {
  async getPartners(): Promise<Partner[]> {
    return apiClient.post<Partner[]>('/admins/partenaire/ajouter/');
  },
  
  async getPartnerById(id: string): Promise<Partner> {
    // Assuming there's an endpoint to get a single partner
    // If not, we'll fetch all and filter
    const partners = await this.getPartners();
    const partner = partners.find(p => p.id?.toString() === id);
    if (!partner) {
      throw new Error('Partner not found');
    }
    return partner;
  },
};
