import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

// Initialize connection to the PostgreSQL database
const sql = postgres({
  host: Deno.env.get("POSTGRES_HOST") || "dpg-crts42m8ii6s73al16tg-a",
  port: Number(Deno.env.get("POSTGRES_PORT")) || 5432,
  database: Deno.env.get("POSTGRES_DB") || "messages_nrk1",
  username: Deno.env.get("POSTGRES_USER") || "admin",
  password:
    Deno.env.get("POSTGRES_PASSWORD") || "7vQd7nPmxi6adWhmtfXvFLWJfBH0cqRp",
});

// Export the sql instance
export { sql };
