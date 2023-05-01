import express, { Request, Response } from "express";
import * as fs from "fs";
import multer from "multer";
import * as path from "path";
import UploadFileResponse from "../dto/response/UploadFileResponse";
import { DOMAIN } from "../config/configuration";
import ResponseDTO from "../dto/response/ResponseDTO";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: async (req, file, callback) => {
        let dir = `uploads/${req.params["path"]}${req.params[0]}`;
        const res = fs.mkdirSync(dir, { recursive: true });
        callback(null, dir);
    },
    filename: (req, file, cb) => {
        const filename: string =
            path.parse(file.originalname).name.replace(/\s/g, '') +
            '-' +
            Date.now();
        const extension: string = path.parse(file.originalname).ext;
        cb(null, `${filename}${extension}`);
    },
})
const upload = multer({ storage: storage })

uploadRouter.post('/single/:path*',
    upload.single("file"),
    (req: Request, res: Response<ResponseDTO<UploadFileResponse>>) => {
        const file = req.file as Express.Multer.File;
        res.send(new ResponseDTO(
            {
                ...file,
                url: `${DOMAIN}/${req.params["path"]}${req.params[0]}/${file.filename}`
            }
        ));
    });

export default uploadRouter;