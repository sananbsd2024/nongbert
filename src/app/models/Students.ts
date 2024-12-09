import mongoose, { Schema, model, models } from 'mongoose';

const StudentsSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: { type: String, required: true },
  grade: { type: String, required: true },
  age: { type: Number, required: true },
}, { timestamps: true });

const Students = models.Students || model('Students', StudentsSchema);

export default Students;
