'use client';

import { InstructorEntity } from '@/entities/instructor.entity'; // Updated import
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { instructorsRepository } from '@/repositories/instructors.repository';

interface InstructorsContextType {
  instructors: InstructorEntity[]; // Use updated InstructorEntity
  loading: boolean;
  error: Error | null;
  refetchInstructors: () => Promise<void>;
}

const InstructorsContext = createContext<InstructorsContextType | undefined>(
  undefined
);

export const InstructorsProvider = ({ children }: { children: ReactNode }) => {
  const [instructors, setInstructors] = useState<InstructorEntity[]>([]); // Use updated InstructorEntity
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchInstructors = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await instructorsRepository.findAll({});

      if (response.data) {
        setInstructors(response.data);
      } else {
        console.error('Fetched instructors data is not in the expected format:', response);
        setInstructors([]);
      }
    } catch (err) {
      setError(err as Error);
      setInstructors([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <InstructorsContext.Provider
      value={{
        instructors,
        loading,
        error,
        refetchInstructors: fetchInstructors,
      }}
    >
      {children}
    </InstructorsContext.Provider>
  );
};

export const useInstructors = (): InstructorsContextType => {
  const context = useContext(InstructorsContext);
  if (context === undefined) {
    throw new Error(
      'useInstructors must be used within an InstructorsProvider'
    );
  }
  return context;
};
