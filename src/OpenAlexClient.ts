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

  public async getAuthors(): Promise<Author[]> {
    const resp: rm.IRestResponse<Author[]> = await this.restClient.get<
      Author[]
    >("/authors");
    if (resp.statusCode === 200 && resp.result !== null) {
      return resp.result;
    } else {
      throw Error(
        `Could not get the resource. Status Code: ${resp.statusCode}`
      );
    }
  }
}
