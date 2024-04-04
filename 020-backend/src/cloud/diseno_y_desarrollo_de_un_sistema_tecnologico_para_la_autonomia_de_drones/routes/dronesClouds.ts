import Parse from 'parse/node';
import {
  createDron,
  deleteDron,
  getAllDrones,
  getDronById,
  updateDron,
} from '../controllers/dronesControllers';

Parse.Cloud.define('getAllDrones', getAllDrones(Parse));
Parse.Cloud.define('getDronById', getDronById(Parse));
Parse.Cloud.define('createDron', createDron(Parse));
Parse.Cloud.define('updateDron', updateDron(Parse), { requireUser: true });
Parse.Cloud.define('deleteDron', deleteDron(Parse), { requireUser: true });