
export interface Customer {
    id ?: number;           // Optional, if you want to include an ID (e.g., from a database)
    username ?: string;      
    name: string;          
    email: string;         
    phone: string;         
    address: string;       
    city: string;          
    zipCode: string;       
  }