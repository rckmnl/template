/* eslint-disable no-inline-comments */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */

import Parse from 'parse/node';

export async function getAllActivityLogssData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const ActivityLogs = Parse.Object.extend('activitylogs');
    const query = new Parse.Query(ActivityLogs);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No ActivityLogses found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivityLogsByIdData(activitylogsId: string) {
  try {
    // Verificar si activitylogsId es nulo o indefinido
    if (!activitylogsId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'ActivityLogs ID is missing.');
    }

    const ActivityLogs = Parse.Object.extend('activitylogs');
    const query = new Parse.Query(ActivityLogs);
    query.equalTo('objectId', activitylogsId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `ActivityLogs with ID ${activitylogsId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createActivityLogsData(objectData: any) {
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
    const userPointer = Parse.User.createWithoutData(objectData.reg_person_id);

    const ActivityLogs = Parse.Object.extend('activitylogs');
    const data = new ActivityLogs();

    data.set('reg_person_id', userPointer);

    // Establecer otros campos del desafío
    for (const key in objectData) {
      if (objectData.hasOwnProperty(key) && key !== 'reg_person_id') {
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

export async function updateActivityLogsData(activitylogsId: string, objectData: any) {
  try {
    // Verificar si activitylogsId y objectData existen
    if (!activitylogsId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'ActivityLogs ID or objectData is missing.');
    }

    const ActivityLogs = Parse.Object.extend('activitylogs');
    const query = new Parse.Query(ActivityLogs);
    query.equalTo('objectId', activitylogsId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `ActivityLogs with ID ${activitylogsId} does not exist.`);
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

export async function deleteActivityLogsData(activitylogsId: string) {
  try {
    // Verificar si activitylogsId es nulo o indefinido
    if (!activitylogsId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'ActivityLogs ID is missing.');
    }

    const ActivityLogs = Parse.Object.extend('activitylogs');
    const query = new Parse.Query(ActivityLogs);
    query.equalTo('objectId', activitylogsId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `ActivityLogs with ID ${activitylogsId} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}