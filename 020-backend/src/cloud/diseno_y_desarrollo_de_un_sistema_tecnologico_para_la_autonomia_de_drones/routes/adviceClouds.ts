import Parse from 'parse/node';
import {
  createAdvice,
  deleteAdvice,
  getAdviceById,
  getAllAdvices,
  updateAdvice,
} from '../controllers/adviceControllers';

Parse.Cloud.define('getAllAdvices', getAllAdvices(Parse));
Parse.Cloud.define('getAdviceById', getAdviceById(Parse));
Parse.Cloud.define('createAdvice', createAdvice(Parse));
Parse.Cloud.define('updateAdvice', updateAdvice(Parse));
Parse.Cloud.define('deleteAdvice', deleteAdvice(Parse));