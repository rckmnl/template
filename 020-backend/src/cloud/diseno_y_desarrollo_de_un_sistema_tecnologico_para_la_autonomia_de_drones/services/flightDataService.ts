/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createFlightDataData, 
    deleteFlightDataData, 
    getAllFlightDatasData, 
    getFlightDataByIdData, 
    updateFlightDataData
} from "../database/flightData";


export async function getAllFlightDatasService(page: number) {
try {
  const data = await getAllFlightDatasData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getFlightDataByIdService(flightdataId: string) {
try {
  const data = await getFlightDataByIdData(flightdataId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createFlightDataService(objectData: any) {
try {
  const data = await createFlightDataData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateFlightDataService(flightdataId: string, objectData: any) {
try {
  const data = await updateFlightDataData(flightdataId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteFlightDataService(flightdataId: string) {
try {
  await deleteFlightDataData(flightdataId);
} catch (error) {
  throw error;
}
}