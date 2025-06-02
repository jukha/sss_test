import { tryFetchData } from '@/helpers/fetch-data';

const HERE_APP_ID = process.env.NEXT_PUBLIC_HERE_APP_ID;
const HERE_APP_CODE = process.env.NEXT_PUBLIC_HERE_APP_CODE;
const SKIP = process.env.NEXT_PUBLIC_FORCE_SKIP_HERE_API_CALL === 'true';

type HereApiResponse = {
  Response: {
    View: {
      Result: {
        Location: {
          NavigationPosition: {
            Latitude: string
            Longitude: string
          }[]
        }
      }[]
    }[]
  }
}

export async function convertZipToLatLon(zipCode: string) {
  if (SKIP) {
    return { lat: 0, lng: 0 };
  }

  const url = `https://geocoder.api.here.com/6.2/geocode.json?app_id=${HERE_APP_ID}&app_code=${HERE_APP_CODE}&postalcode=${zipCode}&country=USA`

  const {data} = await tryFetchData<HereApiResponse, null>({
    url,
    method: 'GET',
    jsonHeaderInRequest: false,
  })

  if (!data) throw new Error('Error while calling HERE API');

  const position = data?.Response?.View?.[0]?.Result?.[0]?.Location?.NavigationPosition?.[0];
  if (!position?.Latitude || !position?.Longitude) {
    //report error
    return { lat: 0, lng: 0 };
  }

  return {
    lat: position.Latitude,
    lng: position.Longitude
  };
}
