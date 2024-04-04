/// <reference types="parse" />
import Parse from 'parse/node';
export declare function findInTableData(table: string, key: string, value: any, page: number): Promise<Parse.Object<Parse.Attributes>[]>;
