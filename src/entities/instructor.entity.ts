export type InstructorEntity = {
  id: number;
  name: string | null;
  biography: string | null;
  avatarUrl: string | null;
  address: string | null;
  registrationYear: Date | null;
  lat: number | null;
  lng: number | null;
  categories: string[];
  shouldBePublic: boolean | null;
  certifications: string | null;
  numberOfPoolAccess: number | null;
};
