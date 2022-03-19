import { OpenAlexClient } from "../src/OpenAlexClient";
import nock from "nock";
import { mockAuthor } from "./testdata";

describe("OpenAlex Get Lists", (): void => {
  test("Authors", async (): Promise<void> => {
    const scope = nock("https://api.openalex.org")
      .get("/authors")
      .reply(200, [mockAuthor]);
    const client = new OpenAlexClient();
    const resp = await client.getAuthors();
    expect(resp[0].display_name).toBe("Jon Doe");
    scope.done();
  });
});
