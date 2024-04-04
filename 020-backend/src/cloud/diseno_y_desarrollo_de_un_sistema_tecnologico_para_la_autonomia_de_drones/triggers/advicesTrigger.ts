/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { IAdvices } from '../models/advices.interface';
import { validateAdvices } from '../validators/validateAdvices';

Parse.Cloud.beforeSave('advices', async (request) => {
try {  
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IAdvices>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateAdvices(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the advices:', error);
  throw error;
}
});