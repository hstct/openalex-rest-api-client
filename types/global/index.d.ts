type BaseData<T> = T & {
  id: string;
  display_name: string;
};

type DehydratedAuthorData = {
  orcid: string;
};

type DehydratedConceptData = {
  wikidata: string;
  level: number;
};

type DehydratedInstitutionData = {
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
};

type DehydratedVenueData = {
  issn_l: string;
  issn: string[];
  publisher: string;
};

type ExtendedBaseData<T, V> = BaseData<T> & {
  works_count: number;
  cited_by_count: number;
  ids: V;
  counts_by_year: CountData[];
  works_api_url: string;
  updated_date: string;
  created_date: string;
};

type CountData = {
  year: number;
  works_count: number;
  cited_by_count: number;
};

type BaseIdData<T> = T & {
  openalex: string;
  mag?: number;
};

type AuthorIdData = {
  orcid: string;
  twitter?: string;
  wikipedia?: string;
  scopus?: string;
};

type ConceptIdData = {
  wikidata: string;
  wikipedia?: string;
  umls_aui: string[];
  umls_cui: string[];
};

type InstitutionIdData = {
  ror: string;
  grid?: string;
  wikipedia?: string;
  wikidata?: string;
};

type VenueIdData = {
  issn_l: string;
  issn: string[];
};

type WorkIdData = {
  doi: string;
  pmid?: string;
  pmcid?: string;
};

type GeoData = {
  city: string;
  geonames_city_id: string;
  region: string;
  country_code: string;
  country: string;
  latitude: number;
  longitude: number;
};

interface AuthorData
  extends ExtendedBaseData<DehydratedAuthorData, BaseIdData<AuthorIdData>> {
  display_name_alternatives?: string[];
  last_known_institution?: BaseData<DehydratedInstitutionData>;
  x_concepts?: RelatedConcept[];
}

interface RelatedConceptData extends BaseData<DehydratedConceptData> {
  score: number;
}

interface ConceptData
  extends ExtendedBaseData<DehydratedConceptData, BaseIdData<ConceptIdData>> {
  description?: string;
  image_url?: string;
  image_thumbnail_url?: string;
  international?: any;
  ancestors?: BaseData<DehydratedConceptData>[];
  related_concepts?: RelatedConceptData[];
}

interface InstitutionData
  extends ExtendedBaseData<
    DehydratedInstitutionData,
    BaseIdData<InstitutionIdData>
  > {
  homepage_url?: string;
  image_url?: string;
  image_thumbnail_url?: string;
  display_name_acronyms?: string[];
  display_name_alternatives?: string[];
  geo: GeoData;
  // TODO
  international: any;
  associated_institutions: BaseData<DehydratedInstitutionData>[];
  x_concepts: RelatedConceptData[];
}

interface VenueData
  extends ExtendedBaseData<DehydratedVenueData, BaseIdData<VenueIdData>> {
  is_oa: boolean;
  is_in_doaj: boolean;
  homepage_url: string;
  x_concepts: RelatedConceptData[];
}

interface HostVenueData extends BaseData<DehydratedVenueData> {
  url: string;
  is_oa: boolean;
  version: "publishedVersion" | "acceptedVersion" | "submittedVersion";
  license?: string;
}

type OpenAccessData = {
  is_oa: boolean;
  oa_status: "gold" | "green" | "hybrid" | "bronze" | "closed";
  oa_url: string;
};

type AuthorshipData = {
  author_position: "first" | "middle" | "last";
  author: BaseData<DehydratedAuthorData>;
  institutions: BaseData<DehydratedInstitutionData>[];
  raw_affiliation_string: string;
};

type BibliographyData = {
  volume: string;
  issue: string;
  first_page: string;
  last_page: string;
};

type MeshTagData = {
  descriptor_ui: string;
  descriptor_name: string;
  qualifier_ui: string;
  qualifier_name: string;
  is_major_topic: boolean;
};

interface WorkData {
  id: string;
  display_name: string;
  doi: string;
  title: string;
  publication_year: number;
  publication_date: string;
  ids: BaseIdData<WorkIdData>;
  host_venue: HostVenueData;
  type: string;
  open_access: OpenAccessData;
  authorships: AuthorshipData[];
  cited_by_count: number;
  biblio: BibliographyData;
  is_retracted: boolean;
  is_paratext: boolean;
  concepts: RelatedConceptData[];
  mesh: MeshTagData[];
  alternate_host_venues: HostVenueData[];
  referenced_works: string[];
  related_works: string[];
  abstract_inverted_index: any; // TODO
  cited_by_api_url: string;
  counts_by_year: CountData[];
  updated_date: string;
  created_date: string;
}

declare type EntityData =
  | AuthorData
  | ConceptData
  | InstitutionData
  | VenueData
  | WorkData;
