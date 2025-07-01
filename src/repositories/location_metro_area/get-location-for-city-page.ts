import catchable from '@/utils/catchable';
import { prismaClient } from '@/prisma';

type Options = {
  city: string;
  state: string
}

const getMetroAreaById = (id: number) => {
  return prismaClient.locationMetroArea.findUnique({
    where: { id }
  })
}

const getMetroAreaByCityOrState = (options: Options) => {
  return prismaClient.locationMetroArea.findFirst({
    where: {
      AND: [
        {name: options.city},
        {state_abbreviation: options.state}
      ]
    },
  });
}

const getLocationAndMetroAreaByCityAndState = async (options: Options) => {
  const locationCityPage = await prismaClient.locationCityPage.findFirst({
    where: {
      AND: [
        {name: options.city},
        {state_abbreviation: options.state}
      ]
    },
  });

  const metroArea = locationCityPage ?
    await getMetroAreaById(locationCityPage.metro_area_id) :
    await getMetroAreaByCityOrState(options);

  return { locationCityPage, metroArea }
}

export default catchable(getLocationAndMetroAreaByCityAndState)
