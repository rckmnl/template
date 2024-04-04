/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createInterestsData, 
    deleteInterestsData, 
    getAllInterestssData, 
    getInterestsByIdData, 
    updateInterestsData
} from "../database/interests";


export async function getAllInterestssService(page: number) {
try {
  const data = await getAllInterestssData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getInterestsByIdService(interestsId: string) {
try {
  const data = await getInterestsByIdData(interestsId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createInterestsService(objectData: any) {
try {
  const data = await createInterestsData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateInterestsService(interestsId: string, objectData: any) {
try {
  const data = await updateInterestsData(interestsId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteInterestsService(interestsId: string) {
try {
  await deleteInterestsData(interestsId);
} catch (error) {
  throw error;
}
}