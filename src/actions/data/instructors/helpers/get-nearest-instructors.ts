import { Instructor, Prisma } from '@/__generated__/prisma';
import { InstructorEntityBuilder } from '@/entity_builders/instructor.entity-builder';
import { prismaClient } from '@/prisma';
import { Decimal } from '@prisma/client/runtime/library';

type NearestInstructorOptions = {
  lat: Decimal;
  lng: Decimal;
  shouldBePublic: boolean | null;
  category: string | null;
  distance: number;
};

export const getNearestInstructors = async (options: NearestInstructorOptions) => {
  const nearbyInstructors = await prismaClient.$queryRaw<unknown[]>`
    SELECT
      id,
      first_name,
      last_name,
      biography,
      profile_pic,
      state,
      city,
      zip,
      hired_date,
      lat,
      lng,
      is_public,
      ROUND(
        (3959 * acos(
          cos(radians(${options.lat})) * cos(radians(lat)) *
          cos(radians(lng) - radians(${options.lng})) +
          sin(radians(${options.lat})) * sin(radians(lat))
        ))
      ) AS distance
    FROM instructor
    WHERE
      lat IS NOT NULL
      AND lng IS NOT NULL
      AND ${options.shouldBePublic != null ? Prisma.sql`is_public = ${options.shouldBePublic}` : Prisma.sql`1 = 1`}
      AND activity_status = 'Active'
      AND ${
        options.category
          ? Prisma.sql`exp_${Prisma.raw(options.category)} not in ('None', 'No', 'none', 'no', '0')`
          : Prisma.sql`1 = 1`
      }
    HAVING distance < ${options.distance}
    ORDER BY distance ASC, instructor_score ASC
  `;

  const result = new InstructorEntityBuilder().buildMany(nearbyInstructors as Instructor[]);

  return result;
};
