"use strict";

import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserService.getById(id);
      res.status(200).json(user);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserService.update(id, req.body);
      res.status(200).json(user);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserService.delete(id);
      res.status(200).json(user);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default new UserController();
