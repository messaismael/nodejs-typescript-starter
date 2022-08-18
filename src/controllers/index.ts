import { Request } from "express";

export class emptyController {
  static getEmpty(req: Request, res: any): void {
    
    return res.json({ success: true, message: "Empty Controller is ok" });
  }
}
