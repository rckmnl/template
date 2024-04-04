/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { createInterestsService, deleteInterestsService, getAllInterestssService, getInterestsByIdService, updateInterestsService } from "../services/interestsService";

  
  export function getAllInterestss(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const interests = await getAllInterestssService(page);
  
        return {
          status: 'success',
          result: true,
          interests,
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
  
  export function getInterestsById(Parse: any) {
    return async (request: any) => {
      try {
        const { interestsId } = request.params;
        const interests = await getInterestsByIdService(interestsId);
  
        return {
          status: 'success',
          result: true,
          interests,
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
  
  export function createInterests(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const interests = await createInterestsService(objectData);
  
        return {
          status: 'success',
          result: true,
          interests,
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
  
  export function updateInterests(Parse: any) {
    return async (request: any) => {
      try {
        const { interestsId, objectData } = request.params;
        const interests = await updateInterestsService(interestsId, objectData);
  
        return {
          status: 'success',
          result: true,
          interests,
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
  
  export function deleteInterests(Parse: any) {
    return async (request: any) => {
      try {
        const { interestsId } = request.params;
        await deleteInterestsService(interestsId);
  
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