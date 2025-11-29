import { apiClient } from './api';
import { ContactData } from '@/types/contact';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactService = {
  async getContactInfo(): Promise<ContactData> {
    // This should likely be a GET request to a different endpoint to fetch info.
    // For now, I'm leaving it as is, but focusing on the form submission.
    return apiClient.get<ContactData>('/admins/contacte/');
  },
  async sendContactMessage(formData: ContactFormData): Promise<any> {
    return apiClient.post('/admins/contacte/ajouter/', formData);
  },
};
 