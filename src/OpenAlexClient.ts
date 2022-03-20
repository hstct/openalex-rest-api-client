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
    const resp: rm.IRestResponse<BaseEntity[]> = await this.restClient.get(
      entity
    );
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error("Resource not found.");
    }
  }

  public async getAuthors(): Promise<BaseEntity[]> {
    return this.getLists("/authors");
  }

  public async getConcepts(): Promise<BaseEntity[]> {
    return this.getLists("/concepts");
  }
}
