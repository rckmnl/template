/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { IFireDetection } from '../models/fireDetection.interface';
import { validateFireDetection } from '../validators/validateFireDetection';

Parse.Cloud.beforeSave('firedetection', async (request) => {
try {  
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IFireDetection>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateFireDetection(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the firedetection:', error);
  throw error;
}
});