import { OpenAlexClient } from "../src/OpenAlexClient";
import nock from "nock";
import {
  sampleAuthor,
  sampleConcept,
  sampleInstitution,
  sampleVenue,
  sampleWork,
} from "./testdata";

describe("OpenAlex Get Lists", (): void => {
  test("Authors", async (): Promise<void> => {
    const scope = nock("https://api.openalex.org")
      .get("/authors")
      .reply(200, [sampleAuthor]);
    const client = new OpenAlexClient();
    const resp = await client.getAuthors();
    expect(resp[0].display_name).toBe("Jon Doe");
    scope.done();
  });

  test("Concepts", async (): Promise<void> => {
    const scope = nock("https://api.openalex.org")
      .get("/concepts")
      .reply(200, [sampleConcept]);
    const client = new OpenAlexClient();
    const resp = await client.getConcepts();
    expect(resp[0].display_name).toBe("Medicine");
    scope.done();
  });

  test("Instituions", async (): Promise<void> => {
    const scope = nock("https://api.openalex.org")
      .get("/institutions")
      .reply(200, [sampleInstitution]);
    const client = new OpenAlexClient();
    const resp = await client.getInstitutions();
    expect(resp[0].display_name).toContain("Jon Doe");
    scope.done();
  });

  test("Venues", async (): Promise<void> => {
    const scope = nock("https://api.openalex.org")
      .get("/venues")
      .reply(200, [sampleVenue]);
    const client = new OpenAlexClient();
    const resp = await client.getVenues();
    expect(resp[0].display_name).toContain("Sample");
    scope.done();
  });

  test("Works", async (): Promise<void> => {
    const scope = nock("https://api.openalex.org")
      .get("/works")
      .reply(200, [sampleWork]);
    const client = new OpenAlexClient();
    const resp = await client.getWorks();
    expect(resp[0].display_name).toContain("Jon Doe");
    scope.done();
  });
});
