/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
//*  import Parse from 'parse';
//*  import { Grant } from './Grant'; // Assuming you have a Grant interface/class

import { checkUserRole } from '../../cloud/diseno_y_desarrollo_de_un_sistema_tecnologico_para_la_autonomia_de_drones/utils/accesControl';
import { createData } from '../database/seeder';

export async function createDataService(request: any, sessionToken: string) {
  try {
    const permission = await checkUserRole(sessionToken, ['superuser', 'admin', 'ia']);

    if (!permission) {
      throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
    }
    const data = await createData(request);
    return data;
  } catch (error) {
    throw error;
  }
}