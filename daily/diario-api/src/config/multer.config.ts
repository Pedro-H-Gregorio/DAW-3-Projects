import { diskStorage, FileFilterCallback } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const storage = diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.resolve(
      __dirname,
      '..',
      '..',
      'uploads',
      'diarios',
    );
    fs.mkdirSync(uploadPath, { recursive: true });
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(file.originalname);
    callback(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback,
) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg'
  ) {
    callback(null, true);
  } else {
    callback(
      new Error('Tipo de arquivo inválido. Apenas PNG e JPEG são permitidos.'),
    );
  }
};

export const multerConfig = {
  storage,
  fileFilter,
};
