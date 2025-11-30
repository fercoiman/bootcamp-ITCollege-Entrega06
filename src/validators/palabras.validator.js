import Joi from "joi";

const palabraSchema = Joi.object({
  palabra: Joi.string().trim().min(1).required(),
});

export class PalabrasValidator {
  static validarNuevaPalabra(data) {
    return palabraSchema.validate(data, { abortEarly: false });
  }
}

export default PalabrasValidator;
