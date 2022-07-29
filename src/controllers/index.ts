import { Request } from "express";

export const emptyController = (req: Request, res: any) => {

  return res.json({ success: true, message: "Empty Controller is ok" });
};
