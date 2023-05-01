"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("./router/upload"));
const configuration_1 = require("./config/configuration");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('uploads'));
app.use("/api/upload", upload_1.default);
app.listen(configuration_1.PORT, () => {
    console.log('Server started on port ' + configuration_1.PORT);
});
