import Parse from 'parse/node';
import {
  createLocation,
  deleteLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
} from '../controllers/locationControllers';

Parse.Cloud.define('getAllLocationes', getAllLocations(Parse));
Parse.Cloud.define('getLocationById', getLocationById(Parse));
Parse.Cloud.define('createLocation', createLocation(Parse));
Parse.Cloud.define('updateLocation', updateLocation(Parse), { requireUser: true });
Parse.Cloud.define('deleteLocation', deleteLocation(Parse), { requireUser: true });