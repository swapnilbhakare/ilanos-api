import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string().required(),
  image: Joi.string(),
  category: Joi.string().required(),
  onSale: Joi.string(),
});
export default productSchema;
