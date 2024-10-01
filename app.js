import { serve } from "https://deno.land/std@0.222.1/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as messageService from "./services/messageService.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

// Redirect function for POST/Redirect/GET pattern
const redirectTo = (path) => {
  return new Response(null, {
    status: 303,
    headers: {
      "Location": path,
    },
  });
};

// Handle incoming HTTP requests
const handleRequest = async (request) => {
  try {
    if (request.method === "GET") {
      // Fetch messages and render
      const messages = await messageService.getRecentMessages();
      const data = { messages };
      return new Response(await renderFile("index.eta", data), responseDetails);
    } else if (request.method === "POST") {
      // Handle form submission
      const formData = await request.formData();
      const sender = formData.get("sender");
      const message = formData.get("message");

      if (sender && message) {
        await messageService.addMessage(sender, message);
      }

      return redirectTo("/");
    }

    return new Response("Not found", { status: 404 });
  } catch (error) {
    console.error("Error handling request:", error.message);
    return new Response("Internal Server Error", { status: 500 });
  }
};

// Start the server
serve(handleRequest, { port: 7777 });
