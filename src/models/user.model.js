import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
