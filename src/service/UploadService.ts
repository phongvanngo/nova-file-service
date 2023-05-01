let instance: UploadService;
export default class UploadService {
    k: number;
    private constructor() {
        this.k = 1;
    }

    static getInstance(): UploadService {
        if (!instance) {
            instance = new UploadService();
        }
        return instance;
    }

    helloworld() {
        return "hello world" + this.k;
    }
}