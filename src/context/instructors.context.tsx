'use client';

import { InstructorEntity } from '@/entities/instructor.entity'; // Updated import
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import serverDataApi from '@/actions/data/server-data-api';

type InstructorsContextType = {
  instructors: InstructorEntity[];
  loading: boolean;
  error: Error | null;
  refetchInstructors: () => Promise<void>;
}

const InstructorsContext = createContext<InstructorsContextType | undefined>(undefined);

export const InstructorsProvider = ({ children }: { children: ReactNode }) => {
  const [instructors, setInstructors] = useState<InstructorEntity[]>([]); // Use updated InstructorEntity
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchInstructors = async () => {
    setLoading(true);
    setError(null);

    try {
      setInstructors(await serverDataApi.instructors.featured.get())
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
