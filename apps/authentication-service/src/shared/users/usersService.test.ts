import { exampleUser } from "@/test/testData/users";
import {
  getUserClientId,
  getUserById,
  User,
  setUserClientId,
} from "./userService";

describe("User Service tests", () => {
  const USER_ID = "google-oauth2|115545703201865461059";
  const CLIENT_ID: string = "test-client-id";

  it("returns a user resource", async () => {
    const user: User = await getUserById(USER_ID);
    expect(user).not.toBe(undefined);
    expect(user).toEqual(exampleUser);
  });

  it("returns user's client id", async () => {
    const clientId = await getUserClientId(USER_ID);
    expect(clientId).not.toBe(undefined);
    expect(clientId).toBe(CLIENT_ID);
  });

  it("sets a user's client id", async () => {
    const user = await setUserClientId(USER_ID, CLIENT_ID);
    expect(user).not.toBe(undefined);
    expect(user).toEqual(exampleUser);
  });

  // it("tries to set a client id for a user that already has one", async () => {
  //   const clientId = await getUserClientId(USER_ID);
  //   expect(clientId).not.toBe(undefined);
  //   expect(clientId).toBe(CLIENT_ID);
  // });
});
