/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IFireDetection } from '../models/fireDetection.interface';
import { fireDetectionSchema } from '../schemas/fireDetectionSchema';
import * as Yup from 'yup';

export async function validateFireDetection(firedetection: Partial<IFireDetection>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await fireDetectionSchema.validate(firedetection, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(fireDetectionSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in firedetection) {
          const schema = Yup.reach(fireDetectionSchema, key) as Yup.AnySchema;
          const firedetectionKey = key as keyof typeof firedetection;
          return schema.validate(firedetection[firedetectionKey]);
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