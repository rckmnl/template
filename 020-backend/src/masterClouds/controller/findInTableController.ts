/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { findInTableService } from '../service/findInTableServices';

export function findInTable(Parse: any) {
  return async (request: any) => {
    try {
      const { table, key, value, page } = request.params;
      const data = await findInTableService(table, key, value, page);

      return {
        status: 'success',
        result: true,
        data,
      };
    } catch (error) {
      console.error(`Código de error: ${error.code}, Mensaje de error: ${error.message}`);
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