import mongoose, { Schema } from 'mongoose';
const feedbackSchema = new Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
