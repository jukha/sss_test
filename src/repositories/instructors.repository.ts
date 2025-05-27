import {GenericRepository} from '@/repositories/generic.repository';
import {InstructorEntity} from '@/entities/instructor.entity'; // Ensures it uses the updated entity

class InstructorsRepository extends GenericRepository<InstructorEntity> {}

export const instructorsRepository = new InstructorsRepository({
  baseEndpoint: '/api/instructors',
  allowedMethods: ['get']
});
