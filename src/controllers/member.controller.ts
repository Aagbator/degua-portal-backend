import { Response, Request } from "express";
import { memberService } from "../services";

const getAllMembers = async (req: Request, res: Response) => {
  const allMembers = await memberService.getAllMembers();
  res.send({ status: "200", data: allMembers });
};

export default {
  getAllMembers,
};
