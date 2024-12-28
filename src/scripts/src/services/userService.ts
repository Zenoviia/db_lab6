"use strict";

import connectToDatabase from "../conectionDataBase/connectingDb";
import IUser from "../interface/user";
import userSQL from "../SQL/user";

class UserService {
  async #executeQuery(query: string, params: any[] = []) {
    const connection = await connectToDatabase();
    try {
      return await connection.execute(query, params);
    } catch (err: any) {
      throw new Error(`Database query failed: ${err.message}`);
    } finally {
      connection.release();
    }
  }

  async create(user: IUser): Promise<{ id: number; message: string }> {
    const query = userSQL.createUser;
    const valuesArray = Object.values(user);

    const [result]: any = await this.#executeQuery(query, [...valuesArray]);

    return { id: result.insertId, message: "User created successfully" };
  }

  async getAll(): Promise<any[]> {
    const query = userSQL.readUserList;
    const [users]: any[] = await this.#executeQuery(query);
    return users;
  }

  async getById(id: number | string): Promise<any> {
    const query = userSQL.readUserById;
    const [user]: any[] = await this.#executeQuery(query, [id]);

    if (!Array.isArray(user) || user.length === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user[0];
  }

  async update(id: number | string, user: IUser): Promise<{ message: string }> {
    const query = userSQL.updateUserById;
    const valuesArray = Object.values(user);

    const [result]: any = await this.#executeQuery(query, [...valuesArray, id]);

    if (result.affectedRows === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return { message: "User updated successfully" };
  }

  async delete(id: string): Promise<{ message: string }> {
    const query = userSQL.deleteUserById;
    const [result]: any = await this.#executeQuery(query, [id]);

    if (result.affectedRows === 0) {
      throw new Error(`User with ID ${id} not found`);
    }

    return { message: "User deleted successfully" };
  }
}

export default new UserService();
