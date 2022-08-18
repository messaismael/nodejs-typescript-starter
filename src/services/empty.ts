import { Empty, IEmpty } from "../models/empty.model";

export class emptyService {
  static listEmpty() {
    return Empty.find();
  }

  static async create(data: IEmpty) {
    let doc = new Empty(data);
    return await doc.save();
  }

  static async update(id: string, data: IEmpty) {
    return await Empty.updateOne({ _id: id }, data);
  }

  static async delete(id: string) {
    return await Empty.deleteOne({ _id: id });
  }
}