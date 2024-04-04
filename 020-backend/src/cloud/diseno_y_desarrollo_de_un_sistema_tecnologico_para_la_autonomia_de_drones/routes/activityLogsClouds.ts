import Parse from 'parse/node';
import {
  createActivityLogs,
  deleteActivityLogs,
  getAllActivityLogss,
  getActivityLogsById,
  updateActivityLogs,
} from '../controllers/activityLogsControllers';

Parse.Cloud.define('getAllActivityLogses', getAllActivityLogss(Parse));
Parse.Cloud.define('getActivityLogsById', getActivityLogsById(Parse));
Parse.Cloud.define('createActivityLogs', createActivityLogs(Parse));
Parse.Cloud.define('updateActivityLogs', updateActivityLogs(Parse), { requireUser: true });
Parse.Cloud.define('deleteActivityLogs', deleteActivityLogs(Parse), { requireUser: true });