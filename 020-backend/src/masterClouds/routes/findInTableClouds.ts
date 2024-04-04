import Parse from 'parse/node';
import { findInTable } from '../controller/findInTableController';

Parse.Cloud.define('findInTable', findInTable(Parse));