import { sql } from "../database/database.js";

// Function to insert a new message
const addMessage = async (sender, message) => {
  try {
    await sql`INSERT INTO messages (sender, message) VALUES (${sender}, ${message})`;
    console.log(`Added message from ${sender}: ${message}`); // Log success
  } catch (error) {
    console.error("Error adding message:", error.message);
    throw new Error("Failed to add message");
  }
};

// Function to retrieve the five most recent messages
const getRecentMessages = async () => {
  try {
    const messages =
      await sql`SELECT sender, message FROM messages ORDER BY id DESC LIMIT 10`;
    return messages; // Return the messages array
  } catch (error) {
    console.error("Error retrieving messages:", error.message);
    throw new Error("Failed to retrieve messages");
  }
};

export { addMessage, getRecentMessages };
