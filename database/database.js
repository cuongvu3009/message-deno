import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

// Initialize connection to the PostgreSQL database
const sql = postgres({
  host: Deno.env.get("POSTGRES_HOST") || "localhost",
  port: Number(Deno.env.get("POSTGRES_PORT")) || 5432,
  database: Deno.env.get("POSTGRES_DB") || "messages",
  username: Deno.env.get("POSTGRES_USER") || "postgres",
  password: Deno.env.get("POSTGRES_PASSWORD") || "099730",
});

// Export the sql instance
export { sql };
