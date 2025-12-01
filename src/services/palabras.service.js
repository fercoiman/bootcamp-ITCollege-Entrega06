import palabrasDAO from "../daos/palabrasDAO.factory.js";

class PalabrasService {
  async agregarPalabra(palabra) {
    const nueva = await palabrasDAO.addWord({ palabra });
    return nueva;
  }

  async obtenerPalabras() {
    const palabras = await palabrasDAO.getAllWords();
    return palabras;
  }

  async obtenerFrase() {
    const palabras = await this.obtenerPalabras();
    const frase = palabras.map((p) => p.palabra).join(" ");
    return { frase, palabras };
  }
}

const palabrasService = new PalabrasService();

export { PalabrasService };
export default palabrasService;
