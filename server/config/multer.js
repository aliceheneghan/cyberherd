// libraries
import multer from "multer";

const upload = multer({
  dest: "./uploads/images",
  limits: { fileSize: 5000000 },
});

export default upload;
