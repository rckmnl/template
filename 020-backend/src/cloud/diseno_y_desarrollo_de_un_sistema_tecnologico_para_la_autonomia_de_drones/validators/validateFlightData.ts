/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IFlightData } from '../models/fligthData.interface';
import { flightDataSchema } from '../schemas/flightDataSchema';
import * as Yup from 'yup';

export async function validateFlightData(flightdata: Partial<IFlightData>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await flightDataSchema.validate(flightdata, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(flightDataSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in flightdata) {
          const schema = Yup.reach(flightDataSchema, key) as Yup.AnySchema;
          const flightdataKey = key as keyof typeof flightdata;
          return schema.validate(flightdata[flightdataKey]);
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