import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

/**
 * Prompt registration function type
 */
export type PromptRegistration = (server: McpServer) => void;
