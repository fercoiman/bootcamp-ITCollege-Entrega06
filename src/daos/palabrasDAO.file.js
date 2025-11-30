import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "../../data/palabras.json");

async function ensureFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readAll() {
  await ensureFile();
  const data = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

async function writeAll(palabras) {
  await fs.writeFile(DATA_FILE, JSON.stringify(palabras, null, 2), "utf-8");
}

class PalabrasFileDAO {
  async addWord({ palabra }) {
    const palabras = await readAll();

    const nuevaPalabra = {
      id: uuidv4(),
      palabra,
      timestamp: Date.now(),
    };

    palabras.push(nuevaPalabra);
    await writeAll(palabras);

    return nuevaPalabra;
  }

  async getAllWords() {
    const palabras = await readAll();
    return palabras.sort((a, b) => a.timestamp - b.timestamp);
  }
}

export default PalabrasFileDAO;
