declare interface BaseDehydrated {
  id: string;
  display_name: string;
}

declare interface DehydratedAuthor extends BaseDehydrated {
  orcid: string;
}

declare interface DehydratedConcept extends BaseDehydrated {
  wikidata: string;
  level: number;
}

declare interface DehydratedInstitution extends BaseDehydrated {
  ror: string;
  country_code: string;
  type:
    | "education"
    | "healthcare"
    | "company"
    | "archive"
    | "nonprofit"
    | "government"
    | "facility"
    | "other";
}

declare interface RelatedConcept extends DehydratedConcept {
  score: number;
}

declare interface Author extends DehydratedAuthor {
  display_name_alternatives?: string[];
  works_count: number;
  cited_by_count: number;
  ids: AuthorIds;
  last_known_institution?: DehydratedInstitution;
  x_concepts?: RelatedConcept[];
  counts_by_year: CountsByYear[];
  works_api_url: string;
  updated_date: string;
  created_date: string;
}

declare interface CountsByYear {
  year: number;
  works_count: number;
  cited_by_count: number;
}

declare interface OpenAlexIds {
  openalex: string;
}

declare interface AuthorIds extends OpenAlexIds {
  orcid: string;
  mag?: number;
  twitter?: string;
  wikipedia?: string;
  scopus?: string;
}
