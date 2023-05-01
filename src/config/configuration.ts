import dotenv from "dotenv"
import path from "path";

const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;

console.log("Environment: " + env);

dotenv.config({ path: path.join(__dirname, '..', '..', envFile) });

export const DOMAIN = process.env.DOMAIN;
export const PORT = process.env.PORT || 3000;
console.log("domain", DOMAIN);