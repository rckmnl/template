/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  createFireDetectionService, 
  deleteFireDetectionService, 
  getAllFireDetectionsService, 
  getFireDetectionByIdService, updateFireDetectionService } from "../services/fireDetectionService";

  export function getAllFireDetections(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const firedetection = await getAllFireDetectionsService(page);
  
        return {
          status: 'success',
          result: true,
          firedetection,
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
  
  export function getFireDetectionById(Parse: any) {
    return async (request: any) => {
      try {
        const { firedetectionId } = request.params;
        const firedetection = await getFireDetectionByIdService(firedetectionId);
  
        return {
          status: 'success',
          result: true,
          firedetection,
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
  
  export function createFireDetection(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const firedetection = await createFireDetectionService(objectData);
  
        return {
          status: 'success',
          result: true,
          firedetection,
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
  
  export function updateFireDetection(Parse: any) {
    return async (request: any) => {
      try {
        const { firedetectionId, objectData } = request.params;
        const firedetection = await updateFireDetectionService(firedetectionId, objectData);
  
        return {
          status: 'success',
          result: true,
          firedetection,
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
  
  export function deleteFireDetection(Parse: any) {
    return async (request: any) => {
      try {
        const { firedetectionId } = request.params;
        await deleteFireDetectionService(firedetectionId);
  
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