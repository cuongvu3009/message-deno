import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

const sql = postgres({
  host: "dpg-crts42m8ii6s73al16tg-a.frankfurt-postgres.render.com",
  port: 5432,
  database: "messages_nrk1",
  username: "admin",
  password: "7vQd7nPmxi6adWhmtfXvFLWJfBH0cqRp",
  ssl: true, // Ensure SSL is enabled for secure connections
  max: 10, // Maximum number of connections in the pool
  idle_timeout: 10, // Connection will be closed after being idle for 10 seconds
  connection_timeout: 5, // Will attempt to connect for 5 seconds before failing
});

export { sql };
