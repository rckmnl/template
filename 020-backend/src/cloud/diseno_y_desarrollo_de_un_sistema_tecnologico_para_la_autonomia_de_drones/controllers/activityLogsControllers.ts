/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  createActivityLogsService, 
  deleteActivityLogsService, 
  getAllActivityLogssService, 
  getActivityLogsByIdService, 
  updateActivityLogsService } from "../services/activityLogsService";

  
  export function getAllActivityLogss(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const activitylogs = await getAllActivityLogssService(page);
  
        return {
          status: 'success',
          result: true,
          activitylogs,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function getActivityLogsById(Parse: any) {
    return async (request: any) => {
      try {
        const { activitylogsId } = request.params;
        const activitylogs = await getActivityLogsByIdService(activitylogsId);
  
        return {
          status: 'success',
          result: true,
          activitylogs,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function createActivityLogs(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const activitylogs = await createActivityLogsService(objectData);
  
        return {
          status: 'success',
          result: true,
          activitylogs,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function updateActivityLogs(Parse: any) {
    return async (request: any) => {
      try {
        const { activitylogsId, objectData } = request.params;
        const activitylogs = await updateActivityLogsService(activitylogsId, objectData);
  
        return {
          status: 'success',
          result: true,
          activitylogs,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }
  
  export function deleteActivityLogs(Parse: any) {
    return async (request: any) => {
      try {
        const { activitylogsId } = request.params;
        await deleteActivityLogsService(activitylogsId);
  
        return {
          status: 'success',
          result: true,
        };
      } catch (error) {
        console.error(`Error code: ${error.code}, Error message: ${error.message}`);
        return {
          status: 'error',
          result: false,
          errorDetails: {
            code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
          },
        };
      }
    };
  }