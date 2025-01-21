import type Kysely from "kysely";
import type { SafeOmit } from "@zbelard/utils/types";
import type { DB as GeneratedDB } from "./db.d.ts";

export type { Kysely };
export type DB = SafeOmit<
  GeneratedDB,
  "atlas_schema_revisions.atlas_schema_revisions"
>;
export type Table = keyof DB;
export { db } from "./db.ts";
