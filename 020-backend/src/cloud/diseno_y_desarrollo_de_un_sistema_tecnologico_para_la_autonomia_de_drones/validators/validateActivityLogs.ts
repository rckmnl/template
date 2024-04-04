/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IActivityLogs } from '../models/activityLogs.interface';
import { ActivityLogsSchema } from '../schemas/activityLogsSchema';
import * as Yup from 'yup';

export async function validateActivityLogs(activitylogs: Partial<IActivityLogs>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await ActivityLogsSchema.validate(activitylogs, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(ActivityLogsSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in activitylogs) {
          const schema = Yup.reach(ActivityLogsSchema, key) as Yup.AnySchema;
          const activitylogsKey = key as keyof typeof activitylogs;
          return schema.validate(activitylogs[activitylogsKey]);
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