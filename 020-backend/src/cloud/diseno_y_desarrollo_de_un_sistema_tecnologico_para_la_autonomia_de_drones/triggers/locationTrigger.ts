/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { ILocation } from '../models/locations.interface';
import { validateLocation } from '../validators/validateLocation';

Parse.Cloud.beforeSave('location', async (request) => {
try {  
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<ILocation>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateLocation(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the location:', error);
  throw error;
}
});