import express from 'express';
import multer from 'multer';
import { File } from '../Model/FileModel.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = new File({
    filename: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    data: req.file.buffer,
  });

  const savedFile = await file.save();
  res.json({ id: savedFile._id, name: savedFile.filename });
});

router.get('/file/:id', async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) return res.status(404).send('File not found');

  res.set({ 'Content-Type': file.mimetype,
    'Content-Disposition': `attachment; filename="${file.filename}"`,
  });
  res.send(file.data);
});

router.get('/files', async (req, res) => {
  const files = await File.find({}, '_id filename uploadDate size');
  res.json(files);
});

export {router }

