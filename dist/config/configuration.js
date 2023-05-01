"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DOMAIN = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;
console.log("Environment: " + env);
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', envFile) });
exports.DOMAIN = process.env.DOMAIN;
exports.PORT = process.env.PORT;
console.log("domain", exports.DOMAIN);
