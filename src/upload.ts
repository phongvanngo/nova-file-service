import { rejects } from "assert";
import fs from "fs";
import { supabaseStorage } from "./config/supabaseConfig";
import { Request, Response } from "express";


const handleUpload = async (req: Request, res: Response) => {
    const file = req.file;
    console.log("File is", file)
    upload(req.file);
}

const upload = async (myfile: any) => {
    const { data, error } = await supabaseStorage.from('products').upload(`images/jav/${myfile?.originalname}`,
        myfile.buffer, {
        cacheControl: '3600',
        contentType: myfile?.mimetype,
        upsert: true
    });
    console.log("data, error", data, error);
    if (error !== null)
        return data;
    console.log("Upload file got error", error)
    return "Loi cmnr";
}

export default handleUpload;

