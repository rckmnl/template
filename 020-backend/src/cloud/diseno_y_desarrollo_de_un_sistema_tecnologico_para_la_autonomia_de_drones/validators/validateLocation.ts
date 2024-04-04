/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { ILocation } from '../models/locations.interface';
import { LocationSchema } from '../schemas/locationSchema';
import * as Yup from 'yup';

export async function validateLocation(location: Partial<ILocation>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await LocationSchema.validate(location, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(LocationSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in location) {
          const schema = Yup.reach(LocationSchema, key) as Yup.AnySchema;
          const locationKey = key as keyof typeof location;
          return schema.validate(location[locationKey]);
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