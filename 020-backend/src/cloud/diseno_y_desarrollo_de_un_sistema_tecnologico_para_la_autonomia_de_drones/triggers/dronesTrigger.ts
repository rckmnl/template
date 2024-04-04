/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { IDron } from '../models/drones.interface';
import { validateDron } from '../validators/validateDron';

Parse.Cloud.beforeSave('dron', async (request) => {
try {  
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IDron>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateDron(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the dron:', error);
  throw error;
}
});