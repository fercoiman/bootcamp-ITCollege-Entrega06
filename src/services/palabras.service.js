import palabrasDAO from "../daos/palabrasDAO.factory.js";

class PalabrasService {
  /**
   * Agrega una nueva palabra.
   * Crea el id y el timestamp en la capa DAO.
   */
  async agregarPalabra(palabra) {
    const nueva = await palabrasDAO.addWord({ palabra });
    return nueva;
  }

  /**
   * Devuelve todas las palabras (array de objetos).
   */
  async obtenerPalabras() {
    const palabras = await palabrasDAO.getAllWords();
    return palabras;
  }

  /**
   * Devuelve la frase como string concatenado.
   */
  async obtenerFrase() {
    const palabras = await this.obtenerPalabras();
    const frase = palabras.map((p) => p.palabra).join(" ");
    return { frase, palabras };
  }
}

const palabrasService = new PalabrasService();

export { PalabrasService };
export default palabrasService;
