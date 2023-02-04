import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, res, callBack) => callBack(null, '../uploads'),
  filename: (req, file, callBack) => {
    const uniqueFileName = `${new Date()}-${Math.round(Math.random() * 1e9)}
      ${path.extname(file.filename)}`;
    callBack(null, uniqueFileName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single('image');

export default handleMultipartData;
