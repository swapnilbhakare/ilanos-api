import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    price: { type: Number, required: true },
    category: { type: String, required: true, minlength: 3, maxlength: 30 },
    desc: { type: String },
    onSale: { type: Boolean, default: false },
    image: {
      type: String,
      required: true,
      get: (image) => {
        // http://localhost:5000/uploads/1616443169266-52350494.png
        if (process.env.ON_HEROKU == "true") {
          return `${image}`;
        }
        return `${APP_URL}/${image}`;
      },
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

export default mongoose.model("Product", productSchema, "products");
