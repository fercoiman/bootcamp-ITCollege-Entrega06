import Joi from "joi";

const createWordSchema = Joi.object({
  palabra: Joi.string().min(1).max(100).required(),
});

export const validateCreateWord = (req, res, next) => {
  const { error } = createWordSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Error de validación",
      detail: error.details.map((d) => d.message),
    });
  }
  next();
};
