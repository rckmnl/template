/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { IAdvices } from '../models/advices.interface';
import { AdvicesSchema } from '../schemas/advicesSchema';
import * as Yup from 'yup';

export async function validateAdvices(advices: Partial<IAdvices>, isNew: boolean) {
  try {
    if (isNew) {
      // Validar el esquema principal
      await AdvicesSchema.validate(advices, { abortEarly: false });
    } else {
    // Validar solo los campos presentes en el esquema
      const schemaKeys = Object.keys(AdvicesSchema.fields);
      const validations = schemaKeys.map((key) => {
        if (key in advices) {
          const schema = Yup.reach(AdvicesSchema, key) as Yup.AnySchema;
          const advicesKey = key as keyof typeof advices;
          return schema.validate(advices[advicesKey]);
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