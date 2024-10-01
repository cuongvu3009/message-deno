import { sql } from "../database/database.js";

// Function to insert a new message
const addMessage = async (sender, message) => {
  try {
    await sql`INSERT INTO messages (sender, message) VALUES (${sender}, ${message})`;
  } catch (error) {
    throw new Error("Failed to add message");
  }
};

// Function to retrieve the five most recent messages
const getRecentMessages = async () => {
  try {
    return await sql`SELECT sender, message FROM messages ORDER BY id DESC LIMIT 5`;
  } catch (error) {
    throw new Error("Failed to retrieve messages");
  }
};

export { addMessage, getRecentMessages };
