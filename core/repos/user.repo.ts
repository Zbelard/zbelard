import { db } from "@zbelard/db";

export class UserRepo {
  static async selectById(id: string) {
    return await db.selectFrom("users").selectAll().where("id", "=", id)
      .executeTakeFirst();
  }

  static async selectByEmail(email: string) {
    return await db.selectFrom("users").selectAll().where("email", "=", email)
      .executeTakeFirst();
  }
}
