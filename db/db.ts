import { Kysely, ParseJSONResultsPlugin, PostgresDialect } from "kysely";
import type { DB } from "./db.d.ts";
// @ts-types="@types/pg"
import pg from "pg";
// @ts-types="@types/pg-cursor"
import Cursor from "pg-cursor";

const connectionString = Deno.env.get("DATABASE_URL") ||
  "postgres://user:pass@localhost:5432/zbelard";

const pool = new pg.Pool({ connectionString: connectionString });

const dialect = new PostgresDialect({
  pool,
  // cursor is needed for streaming results from the database
  cursor: Cursor,
});

export const db = new Kysely<DB>({
  dialect,
  plugins: [new ParseJSONResultsPlugin()],
});
