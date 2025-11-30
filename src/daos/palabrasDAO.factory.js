import { PERSISTENCE } from "../config/index.js";
import PalabrasFileDAO from "./palabrasDAO.file.js";
import PalabrasMongoDAO from "./palabrasDAO.mongo.js";

let instance = null;

function createInstance() {
  switch (PERSISTENCE) {
    case "mongo":
      console.log("[DAO] Usando persistencia MongoDB");
      return new PalabrasMongoDAO();
    case "file":
    default:
      console.log("[DAO] Usando persistencia filesystem");
      return new PalabrasFileDAO();
  }
}

if (!instance) {
  instance = createInstance();
}

const palabrasDAOInstance = instance;

export default palabrasDAOInstance;
