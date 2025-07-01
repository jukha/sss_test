import { createContext } from 'react';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';

export const RegistrationCustomerReviewContext = createContext<CustomerReviewEntity[]>([]);
