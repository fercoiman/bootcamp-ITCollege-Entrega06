import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "words.json");

const ensureFile = async () => {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(FILE_PATH);
  } catch {
    await fs.writeFile(FILE_PATH, "[]", "utf8");
  }
};

export const saveWordFs = async (wordData) => {
  await ensureFile();
  const content = await fs.readFile(FILE_PATH, "utf8");
  const arr = JSON.parse(content);
  arr.push(wordData);
  await fs.writeFile(FILE_PATH, JSON.stringify(arr, null, 2), "utf8");
};

export const getAllWordsFs = async () => {
  await ensureFile();
  const content = await fs.readFile(FILE_PATH, "utf8");
  return JSON.parse(content);
};
