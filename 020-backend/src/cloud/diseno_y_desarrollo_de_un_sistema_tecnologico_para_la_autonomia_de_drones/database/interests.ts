/* eslint-disable no-inline-comments */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */

import Parse from 'parse/node';

export async function getAllInterestssData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const Interests = Parse.Object.extend('interests');
    const query = new Parse.Query(Interests);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los drinks de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No Interestses found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInterestsByIdData(interestsId: string) {
  try {
    // Verificar si interestsId es nulo o indefinido
    if (!interestsId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Interests ID is missing.');
    }

    const Interests = Parse.Object.extend('interests');
    const query = new Parse.Query(Interests);
    query.equalTo('objectId', interestsId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Interests with ID ${interestsId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createInterestsData(objectData: any) {
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
    const userPointer = Parse.User.createWithoutData(objectData.variable_person_id);

    const Interests = Parse.Object.extend('interests');
    const data = new Interests();

    data.set('variable_person_id', userPointer);

    // Establecer otros campos del desafío
    for (const key in objectData) {
      if (objectData.hasOwnProperty(key) && key !== 'variable_person_id') {
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

export async function updateInterestsData(interestsId: string, objectData: any) {
  try {
    // Verificar si interestsId y objectData existen
    if (!interestsId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Interests ID or objectData is missing.');
    }

    const Interests = Parse.Object.extend('interests');
    const query = new Parse.Query(Interests);
    query.equalTo('objectId', interestsId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Interests with ID ${interestsId} does not exist.`);
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

export async function deleteInterestsData(interestsId: string) {
  try {
    // Verificar si interestsId es nulo o indefinido
    if (!interestsId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Interests ID is missing.');
    }

    const Interests = Parse.Object.extend('interests');
    const query = new Parse.Query(Interests);
    query.equalTo('objectId', interestsId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Interests with ID ${interestsId} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}