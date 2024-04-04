import Parse from 'parse/node';
import { createDataController } from '../controller/seederControllers';

Parse.Cloud.define('createData', createDataController(Parse));