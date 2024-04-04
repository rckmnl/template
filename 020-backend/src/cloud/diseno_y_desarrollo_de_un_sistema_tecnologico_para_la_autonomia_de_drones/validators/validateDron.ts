/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IDron } from '../models/drones.interface';
import { DronSchema } from '../schemas/dronSchema';
import * as Yup from 'yup';

export async function validateDron(dron: Partial<IDron>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await DronSchema.validate(dron, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(DronSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in dron) {
          const schema = Yup.reach(DronSchema, key) as Yup.AnySchema;
          const dronKey = key as keyof typeof dron;
          return schema.validate(dron[dronKey]);
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