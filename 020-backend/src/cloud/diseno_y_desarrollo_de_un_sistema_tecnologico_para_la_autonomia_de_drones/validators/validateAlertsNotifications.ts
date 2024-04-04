/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IAlertsNotifications } from '../models/alertsNotifications.interface';
import { alertsNotificationSchema } from '../schemas/alertsNotificationsSchema';
import * as Yup from 'yup';

export async function validateAlertsNotifications(alertsnotifications: Partial<IAlertsNotifications>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await alertsNotificationSchema.validate(alertsnotifications, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(alertsNotificationSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in alertsnotifications) {
          const schema = Yup.reach(alertsNotificationSchema, key) as Yup.AnySchema;
          const alertsnotificationsKey = key as keyof typeof alertsnotifications;
          return schema.validate(alertsnotifications[alertsnotificationsKey]);
        }
      });
      await Promise.all(validations);
    }

    return null;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return {
        errors: error.errors,
        value: error.value,
      };
    } else {
      return {
        message: error.message,
      };
    }
  }
}