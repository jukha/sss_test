export type InstructorEntity = {
  id: string;
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  profile_pic?: string | null;
  biography?: string | null;
  base_address?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  lat?: number | null; // Prisma Decimal
  lng?: number | null; // Prisma Decimal
  certifications?: string | null;
  featured_feedback_1?: string | null;
  featured_feedback_2?: string | null;
  featured_feedback_3?: string | null;
  exp_infants?: string | null;
  exp_toddlers?: string | null;
  exp_preschoolers?: string | null;
  exp_adults?: string | null;
  exp_special_needs?: string | null;
  activity_status?: string | null;
  location_metro_area_id?: string | null;
  location_metro_area_name?: string | null;
  is_public?: boolean | null;
  instructor_score?: string | null;
  number_of_pools_access?: number | null;
  knack_uid?: string | null;
  profile_pic_opt?: string | null;
  profile_pic_sm?: string | null;
  profile_pic_sm_opt?: string | null;
  neighborhood?: string | null;
  profile_img_score?: number; // Prisma Decimal
  hired_date?: string | null; // Prisma DateTime
  political_seo_city_name?: string | null;
  last_updated?: string | null; // Prisma DateTime
  created?: string | null; // Prisma DateTime
  max_driving_range?: number | null;
};
