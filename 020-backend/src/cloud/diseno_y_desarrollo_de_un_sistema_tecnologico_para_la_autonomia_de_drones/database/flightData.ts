/* eslint-disable no-inline-comments */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */

import Parse from 'parse/node';

export async function getAllFlightDatasData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const FlightData = Parse.Object.extend('flightData');
    const query = new Parse.Query(FlightData);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No FlightDatas found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getFlightDataByIdData(flightdataId: string) {
  try {
    // Verificar si flightdataId es nulo o indefinido
    if (!flightdataId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'FlightData ID is missing.');
    }

    const FlightData = Parse.Object.extend('flightData');
    const query = new Parse.Query(FlightData);
    query.equalTo('objectId', flightdataId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `FlightData with ID ${flightdataId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createFlightDataData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'objectData is missing.',
      };
    }

    const User = Parse.Object.extend('User');
    const user = await new User();

    // Crear un puntero a la persona usando el ID proporcionado
    const userPointer = Parse.User.createWithoutData(objectData.fli_person_id);

    const FlightData = Parse.Object.extend('flightData');
    const data = new FlightData();

    data.set('fli_person_id', userPointer);

    // Establecer otros campos del desafío
    for (const key in objectData) {
      if (objectData.hasOwnProperty(key) && key !== 'fli_person_id') {
        data.set(key, objectData[key]);
      }
    }

    await data.save();
    return data;
  } catch (error) {
    throw {
      code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
      message: error.message,
    };
  }
}

export async function updateFlightDataData(flightdataId: string, objectData: any) {
  try {
    // Verificar si flightdataId y objectData existen
    if (!flightdataId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'FlightData ID or objectData is missing.');
    }

    const FlightData = Parse.Object.extend('flightData');
    const query = new Parse.Query(FlightData);
    query.equalTo('objectId', flightdataId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `FlightData with ID ${flightdataId} does not exist.`);
    }

    // Actualizar los campos permitidos
    for (const key in objectData) {
      data.set(key, objectData[key]);
    }
    await data.save(null, { useMasterKey: true });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteFlightDataData(flightdataId: string) {
  try {
    // Verificar si flightdataId es nulo o indefinido
    if (!flightdataId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'FlightData ID is missing.');
    }

    const FlightData = Parse.Object.extend('flightData');
    const query = new Parse.Query(FlightData);
    query.equalTo('objectId', flightdataId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `FlightData with ID ${flightdataId} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}