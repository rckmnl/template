import Parse from 'parse/node';
import {
  createFlightData,
  deleteFlightData,
  getAllFlightDatas,
  getFlightDataById,
  updateFlightData,
} from '../controllers/flightDataControllers';

Parse.Cloud.define('getAllFlightDatas', getAllFlightDatas(Parse));
Parse.Cloud.define('getFlightDataById', getFlightDataById(Parse));
Parse.Cloud.define('createFlightData', createFlightData(Parse));
Parse.Cloud.define('updateFlightData', updateFlightData(Parse), { requireUser: true });
Parse.Cloud.define('deleteFlightData', deleteFlightData(Parse), { requireUser: true });