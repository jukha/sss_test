import {GenericRepository} from '@/repositories/generic.repository';
import {InstructorEntity} from '@/entities/instructor.entity';

class InstructorsRepository extends GenericRepository<InstructorEntity> {}

export const instructorsRepository = new InstructorsRepository({
  baseEndpoint: '/api/instructors',
  allowedMethods: ['get']
});
