import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  size: Number,
  data: Buffer,
  uploadDate: { type: Date, default: Date.now }
});

const File = mongoose.model('File', fileSchema);
export { File }; // ✅ Named export
