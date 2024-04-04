/* eslint-disable etc/no-commented-out-code */
//export * as TrazabilidadTokenizacionProyectoControllers from './controllers';
//export * as TrazabilidadTokenizacionProyectoTriggers from './triggers';

import Parse from 'parse/node';
import { 
        createUserNew, 
        deleteUser, 
        getUserById, 
        getAllUsers, 
        updateUser } from '../controllers/userController';

Parse.Cloud.define('getAllUsers', getAllUsers(Parse), { requireUser: true });
Parse.Cloud.define('getUserById', getUserById(Parse), { requireUser: true });
Parse.Cloud.define('createUser', createUserNew(Parse),);
Parse.Cloud.define('deleteUser', deleteUser(Parse), { requireUser: true });
Parse.Cloud.define('updateUser', updateUser(Parse), { requireUser: true });