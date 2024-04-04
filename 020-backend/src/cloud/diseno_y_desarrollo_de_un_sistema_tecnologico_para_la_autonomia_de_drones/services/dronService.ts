/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createDronData, 
    deleteDronData, 
    getAllDronesData, 
    getDronByIdData, 
    updateDronData
} from "../database/drones";


export async function getAllDronesService(page: number) {
try {
  const data = await getAllDronesData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getDronByIdService(dronId: string) {
try {
  const data = await getDronByIdData(dronId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createDronService(objectData: any) {
try {
  const data = await createDronData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateDronService(dronId: string, objectData: any) {
try {
  const data = await updateDronData(dronId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteDronService(dronId: string) {
try {
  await deleteDronData(dronId);
} catch (error) {
  throw error;
}
}