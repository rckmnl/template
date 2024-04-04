import Parse from 'parse/node';
import {
  createInterests,
  deleteInterests,
  getAllInterestss,
  getInterestsById,
  updateInterests,
} from '../controllers/interestsControllers';

Parse.Cloud.define('getAllInterestses', getAllInterestss(Parse));
Parse.Cloud.define('getInterestsById', getInterestsById(Parse));
Parse.Cloud.define('createInterests', createInterests(Parse));
Parse.Cloud.define('updateInterests', updateInterests(Parse), { requireUser: true });
Parse.Cloud.define('deleteInterests', deleteInterests(Parse), { requireUser: true });