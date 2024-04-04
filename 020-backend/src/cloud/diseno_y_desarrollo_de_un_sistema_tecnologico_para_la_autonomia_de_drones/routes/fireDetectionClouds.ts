import Parse from 'parse/node';
import {
  createFireDetection,
  deleteFireDetection,
  getAllFireDetections,
  getFireDetectionById,
  updateFireDetection,
} from '../controllers/fireDetectionControllers';

Parse.Cloud.define('getAllFireDetectiones', getAllFireDetections(Parse));
Parse.Cloud.define('getFireDetectionById', getFireDetectionById(Parse));
Parse.Cloud.define('createFireDetection', createFireDetection(Parse));
Parse.Cloud.define('updateFireDetection', updateFireDetection(Parse), { requireUser: true });
Parse.Cloud.define('deleteFireDetection', deleteFireDetection(Parse), { requireUser: true });