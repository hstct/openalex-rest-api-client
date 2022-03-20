import * as rm from "typed-rest-client/RestClient";

export class OpenAlexClient {
  private baseUrl?: string;
  private restClient: rm.RestClient;

  constructor(baseUrl = "https://api.openalex.org") {
    this.baseUrl = baseUrl;
    this.restClient = new rm.RestClient("openalex", this.baseUrl);
  }

  public getBaseUrl(): string | undefined {
    return this.baseUrl;
  }

  private async getLists(entity: string) {
    const resp: rm.IRestResponse<AuthorData[]> = await this.restClient.get(
      entity
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }

  public async getAuthors(): Promise<AuthorData[]> {
    const resp: rm.IRestResponse<AuthorData[]> = await this.restClient.get(
      "/authors"
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }

  public async getConcepts(): Promise<ConceptData[]> {
    const resp: rm.IRestResponse<ConceptData[]> = await this.restClient.get(
      "/concepts"
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }

  public async getInstitutions(): Promise<InstitutionData[]> {
    const resp: rm.IRestResponse<InstitutionData[]> = await this.restClient.get(
      "/institutions"
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }

  public async getVenues(): Promise<VenueData[]> {
    const resp: rm.IRestResponse<VenueData[]> = await this.restClient.get(
      "/venues"
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }

  public async getWorks(): Promise<WorkData[]> {
    const resp: rm.IRestResponse<WorkData[]> = await this.restClient.get(
      "/works"
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }
}
