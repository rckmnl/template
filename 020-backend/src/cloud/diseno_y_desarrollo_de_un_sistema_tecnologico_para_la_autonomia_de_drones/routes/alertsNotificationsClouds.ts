import Parse from 'parse/node';
import {
  createAlertsNotifications,
  deleteAlertsNotifications,
  getAllAlertsNotificationss,
  getAlertsNotificationsById,
  updateAlertsNotifications,
} from '../controllers/alertsNotificationsControllers';

Parse.Cloud.define('getAllAlertsNotificationses', getAllAlertsNotificationss(Parse));
Parse.Cloud.define('getAlertsNotificationsById', getAlertsNotificationsById(Parse));
Parse.Cloud.define('createAlertsNotifications', createAlertsNotifications(Parse));
Parse.Cloud.define('updateAlertsNotifications', updateAlertsNotifications(Parse), { requireUser: true });
Parse.Cloud.define('deleteAlertsNotifications', deleteAlertsNotifications(Parse), { requireUser: true });