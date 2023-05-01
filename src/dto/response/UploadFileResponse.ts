export default interface UploadFileResponse extends Express.Multer.File {
    url: String
}