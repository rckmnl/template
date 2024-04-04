import Parse from 'parse/node';
import {
  createAdvice,
  deleteAdvice,
  getAllAdvices,
  getAdviceById,
  updateAdvice,
} from '../controllers/adviceControllers'

Parse.Cloud.define('getAllAdviceses', getAllAdvices(Parse));
Parse.Cloud.define('getAdvicesById', getAdviceById(Parse));
Parse.Cloud.define('createAdvices', createAdvice(Parse));
Parse.Cloud.define('updateAdvices', updateAdvice(Parse), { requireUser: true });
Parse.Cloud.define('deleteAdvices', deleteAdvice(Parse), { requireUser: true });