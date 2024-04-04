/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { createLocationService, deleteLocationService, getAllLocationsService, getLocationByIdService, updateLocationService } from "../services/locationService";

  
  export function getAllLocations(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const location = await getAllLocationsService(page);
  
        return {
          status: 'success',
          result: true,
          location,
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
  
  export function getLocationById(Parse: any) {
    return async (request: any) => {
      try {
        const { locationId } = request.params;
        const location = await getLocationByIdService(locationId);
  
        return {
          status: 'success',
          result: true,
          location,
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
  
  export function createLocation(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const location = await createLocationService(objectData);
  
        return {
          status: 'success',
          result: true,
          location,
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
  
  export function updateLocation(Parse: any) {
    return async (request: any) => {
      try {
        const { locationId, objectData } = request.params;
        const location = await updateLocationService(locationId, objectData);
  
        return {
          status: 'success',
          result: true,
          location,
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
  
  export function deleteLocation(Parse: any) {
    return async (request: any) => {
      try {
        const { locationId } = request.params;
        await deleteLocationService(locationId);
  
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