import PalabrasValidator from "../validators/palabras.validator.js";
import palabrasService from "../services/palabras.service.js";

class PalabrasController {
  static async postPalabra(req, res, next) {
    try {
      const { error, value } = PalabrasValidator.validarNuevaPalabra(req.body);

      if (error) {
        return res.status(400).json({
          message: "Datos inválidos",
          details: error.details.map((d) => d.message),
        });
      }

      const { palabra } = value;
      const nuevaPalabra = await palabrasService.agregarPalabra(palabra);

      return res.status(201).json(nuevaPalabra);
    } catch (err) {
      next(err);
    }
  }

  static async getFrase(req, res, next) {
    try {
      const { frase, palabras } = await palabrasService.obtenerFrase();
      return res.status(200).json({
        frase,
        palabras,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default PalabrasController;
