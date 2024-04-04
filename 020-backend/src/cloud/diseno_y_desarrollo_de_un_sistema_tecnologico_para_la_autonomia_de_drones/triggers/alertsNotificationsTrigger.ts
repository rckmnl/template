/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
import Parse from 'parse/node';
import { IAlertsNotifications } from '../models/alertsNotifications.interface';
import { validateAlertsNotifications } from '../validators/validateAlertsNotifications';

Parse.Cloud.beforeSave('alertsnotifications', async (request) => {
try {  
  // Convertimos el objeto Parse a un objeto JavaScript
  const data = request.object.toJSON() as unknown as Partial<IAlertsNotifications>;
  // Si request.original es undefined, entonces el objeto es nuevo
  const isNew = !request.original;
  const error = await validateAlertsNotifications(data, isNew);
  if (error) {
    const errorObject = JSON.stringify(error);
    throw new Parse.Error(Parse.Error.VALIDATION_ERROR, JSON.parse(errorObject));
  }
} catch (error) {
  console.error('Error while saving the alertsnotifications:', error);
  throw error;
}
});