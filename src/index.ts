import express, { Request, Response } from 'express';
import multer from 'multer';
import handleUpload from './upload';
const upload = multer({ dest: 'uploads/' })
const app = express();
app.post('/profile', upload.single('avatar'), function (req: Request, res: Response, next) {
    console.log("Req file", req.file)
    handleUpload(req, res);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.json("Con cac")
})
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
