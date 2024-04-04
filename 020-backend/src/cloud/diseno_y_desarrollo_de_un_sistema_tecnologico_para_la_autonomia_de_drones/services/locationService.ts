/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createLocationData, 
    deleteLocationData, 
    getAllLocationsData, 
    getLocationByIdData, 
    updateLocationData
} from "../database/location";


export async function getAllLocationsService(page: number) {
try {
  const data = await getAllLocationsData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getLocationByIdService(locationId: string) {
try {
  const data = await getLocationByIdData(locationId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createLocationService(objectData: any) {
try {
  const data = await createLocationData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateLocationService(locationId: string, objectData: any) {
try {
  const data = await updateLocationData(locationId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteLocationService(locationId: string) {
try {
  await deleteLocationData(locationId);
} catch (error) {
  throw error;
}
}