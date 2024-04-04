/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { createDronService, deleteDronService, getAllDronesService, getDronByIdService, updateDronService } from "../services/dronService";

  
  export function getAllDrones(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const dron = await getAllDronesService(page);
  
        return {
          status: 'success',
          result: true,
          dron,
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
  
  export function getDronById(Parse: any) {
    return async (request: any) => {
      try {
        const { dronId } = request.params;
        const dron = await getDronByIdService(dronId);
  
        return {
          status: 'success',
          result: true,
          dron,
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
  
  export function createDron(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const dron = await createDronService(objectData);
  
        return {
          status: 'success',
          result: true,
          dron,
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
  
  export function updateDron(Parse: any) {
    return async (request: any) => {
      try {
        const { dronId, objectData } = request.params;
        const dron = await updateDronService(dronId, objectData);
  
        return {
          status: 'success',
          result: true,
          dron,
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
  
  export function deleteDron(Parse: any) {
    return async (request: any) => {
      try {
        const { dronId } = request.params;
        await deleteDronService(dronId);
  
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