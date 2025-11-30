import PalabraModel from "./models/palabra.model.js";

class PalabrasMongoDAO {
  async addWord({ palabra }) {
    const doc = await PalabraModel.create({ palabra });
    return doc.toJSON();
  }

  async getAllWords() {
    const docs = await PalabraModel.find().sort({ timestamp: 1 }).lean();

    return docs.map((d) => ({
      id: d._id.toString(),
      palabra: d.palabra,
      timestamp:
        d.timestamp instanceof Date ? d.timestamp.getTime() : d.timestamp,
    }));
  }
}

export default PalabrasMongoDAO;
