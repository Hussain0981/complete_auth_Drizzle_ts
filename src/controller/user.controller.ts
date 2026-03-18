import { Request, Response } from "express";
import * as service from "../service/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await service.createUser();

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (e: any) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};