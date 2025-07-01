import getLocationStates from '@/repositories/location_states/base.location_states';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const states = await getLocationStates();
  return NextResponse.json(states);
};
