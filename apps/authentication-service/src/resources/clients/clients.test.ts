import { Client } from "auth0";
import { getClient, createClient, deleteClient } from "./clientsService";

describe("Clients test", () => {
  const userId = "google-oauth2|115545703201865461059";
  const clientId: string = "ucp-test-client";
  const clientName = "Ucp Test Client";
  const clientDesc = "For unit testing";

  it("Test Client Creation", async () => {
    const client: Client = await createClient(userId, {
      name: clientName,
      description: clientDesc,
    });

    expect(client).not.toBe(undefined);
    expect(client.client_id).toBe(clientId);
  });

  it("Test Client Get with ID", async () => {
    const client: Client = await getClient(clientId);

    expect(client).not.toBe(undefined);
    expect(client.client_id).toBe(clientId);
  });

  it("Test Client Delete", async () => {
    const client: Client = await deleteClient(clientId);

    expect(client).not.toBe(undefined);
    expect(client.client_id).toBe(clientId);
  });
});
