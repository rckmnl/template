/// <reference types="node" />
import http from 'http';
export declare const app: import("express-serve-static-core").Express;
export declare const httpServer: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
