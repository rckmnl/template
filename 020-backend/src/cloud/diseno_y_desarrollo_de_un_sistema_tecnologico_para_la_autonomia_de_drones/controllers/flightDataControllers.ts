/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  createFlightDataService, 
  deleteFlightDataService, 
  getAllFlightDatasService, 
  getFlightDataByIdService, 
  updateFlightDataService } from "../services/flightDataService";

  
  export function getAllFlightDatas(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const flightdata = await getAllFlightDatasService(page);
  
        return {
          status: 'success',
          result: true,
          flightdata,
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
  
  export function getFlightDataById(Parse: any) {
    return async (request: any) => {
      try {
        const { flightdataId } = request.params;
        const flightdata = await getFlightDataByIdService(flightdataId);
  
        return {
          status: 'success',
          result: true,
          flightdata,
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
  
  export function createFlightData(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const flightdata = await createFlightDataService(objectData);
  
        return {
          status: 'success',
          result: true,
          flightdata,
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
  
  export function updateFlightData(Parse: any) {
    return async (request: any) => {
      try {
        const { flightdataId, objectData } = request.params;
        const flightdata = await updateFlightDataService(flightdataId, objectData);
  
        return {
          status: 'success',
          result: true,
          flightdata,
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
  
  export function deleteFlightData(Parse: any) {
    return async (request: any) => {
      try {
        const { flightdataId } = request.params;
        await deleteFlightDataService(flightdataId);
  
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