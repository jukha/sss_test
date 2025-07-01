import { createContext } from 'react';
import { FaqEntity } from '@/entities/faq.entity';

export const RegistrationFaqContext = createContext<FaqEntity[]>([]);
