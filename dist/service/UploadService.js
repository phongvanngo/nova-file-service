"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let instance;
class UploadService {
    constructor() {
        this.k = 1;
    }
    static getInstance() {
        if (!instance) {
            instance = new UploadService();
        }
        return instance;
    }
    helloworld() {
        return "hello world" + this.k;
    }
}
exports.default = UploadService;
