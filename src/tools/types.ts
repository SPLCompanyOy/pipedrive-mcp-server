import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  DealsApi,
  PersonsApi,
  OrganizationsApi,
  PipelinesApi,
  ItemSearchApi,
  LeadsApi,
  NotesApi,
  UsersApi,
} from "pipedrive/v1";

/**
 * Collection of Pipedrive API client instances
 */
export interface ApiClients {
  dealsApi: DealsApi;
  personsApi: PersonsApi;
  organizationsApi: OrganizationsApi;
  pipelinesApi: PipelinesApi;
  itemSearchApi: ItemSearchApi;
  leadsApi: LeadsApi;
  notesApi: NotesApi;
  usersApi: UsersApi;
}

/**
 * Function type for registering a tool with the MCP server
 */
export type ToolRegistration = (
  server: McpServer,
  apiClients: ApiClients
) => void;

/**
 * Type guard to check if an error has a message property
 */
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  );
}

/**
 * Safely extract error message from unknown error type
 */
export function getErrorMessage(error: unknown): string {
  if (isErrorWithMessage(error)) {
    return error.message;
  }
  return String(error);
}
