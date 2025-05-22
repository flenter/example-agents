import { Hono } from "hono";
import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// MCP Server

export class BlueskyContextServer extends McpAgent {
	server = new McpServer({ name: "Bluesky Context Server", version: "1.0.0" });
	async init() {}
}

// entrypoint

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default app;
