import React from "react";
import { trpc } from "../utils/trpc.ts";

export function Home() {
  const { data } = trpc.health.useQuery();
  console.log("🚀 ~ Home ~ data:", data);

  return <div>Home</div>;
}
