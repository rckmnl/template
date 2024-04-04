/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createActivityLogsData, 
    deleteActivityLogsData, 
    getAllActivityLogssData, 
    getActivityLogsByIdData, 
    updateActivityLogsData
} from "../database/activityLogs";


export async function getAllActivityLogssService(page: number) {
try {
  const data = await getAllActivityLogssData(page);
  return data;
} catch (error) {
  throw error;
}
}
export async function getActivityLogsByIdService(activitylogsId: string) {
try {
  const data = await getActivityLogsByIdData(activitylogsId);
  return data;
} catch (error) {
  throw error;
}
}

export async function createActivityLogsService(objectData: any) {
try {
  const data = await createActivityLogsData(objectData);

  return data;
} catch (error) {
  throw error;
}
}

export async function updateActivityLogsService(activitylogsId: string, objectData: any) {
try {
  const data = await updateActivityLogsData(activitylogsId, objectData);
  return data;
} catch (error) {
  throw error;
}
}

export async function deleteActivityLogsService(activitylogsId: string) {
try {
  await deleteActivityLogsData(activitylogsId);
} catch (error) {
  throw error;
}
}