/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */

import { 
  createAlertsNotificationsService, 
  deleteAlertsNotificationsService, 
  getAllAlertsNotificationssService, 
  getAlertsNotificationsByIdService, 
  updateAlertsNotificationsService } from "../services/alertsNotificationsService";

  
  export function getAllAlertsNotificationss(Parse: any) {
    return async (request: any) => {
      try {
        const { page } = request.params;
        const alertsnotifications = await getAllAlertsNotificationssService(page);
  
        return {
          status: 'success',
          result: true,
          alertsnotifications,
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
  
  export function getAlertsNotificationsById(Parse: any) {
    return async (request: any) => {
      try {
        const { alertsnotificationsId } = request.params;
        const alertsnotifications = await getAlertsNotificationsByIdService(alertsnotificationsId);
  
        return {
          status: 'success',
          result: true,
          alertsnotifications,
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
  
  export function createAlertsNotifications(Parse: any) {
    return async (request: any) => {
      try {
        const { objectData } = request.params;
        const alertsnotifications = await createAlertsNotificationsService(objectData);
  
        return {
          status: 'success',
          result: true,
          alertsnotifications,
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
  
  export function updateAlertsNotifications(Parse: any) {
    return async (request: any) => {
      try {
        const { alertsnotificationsId, objectData } = request.params;
        const alertsnotifications = await updateAlertsNotificationsService(alertsnotificationsId, objectData);
  
        return {
          status: 'success',
          result: true,
          alertsnotifications,
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
  
  export function deleteAlertsNotifications(Parse: any) {
    return async (request: any) => {
      try {
        const { alertsnotificationsId } = request.params;
        await deleteAlertsNotificationsService(alertsnotificationsId);
  
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