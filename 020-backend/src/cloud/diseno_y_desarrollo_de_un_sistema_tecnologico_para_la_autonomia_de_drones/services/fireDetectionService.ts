/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createFireDetectionData, 
    deleteFireDetectionData, 
    getAllFireDetectionsData, 
    getFireDetectionByIdData, 
    updateFireDetectionData
} from "../database/fireDetection";


export async function getAllFireDetectionsService(page: number) {
try {
  const data = await getAllFireDetectionsData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getFireDetectionByIdService(firedetectionId: string) {
try {
  const data = await getFireDetectionByIdData(firedetectionId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createFireDetectionService(objectData: any) {
try {
  const data = await createFireDetectionData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateFireDetectionService(firedetectionId: string, objectData: any) {
try {
  const data = await updateFireDetectionData(firedetectionId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteFireDetectionService(firedetectionId: string) {
try {
  await deleteFireDetectionData(firedetectionId);
} catch (error) {
  throw error;
}
}