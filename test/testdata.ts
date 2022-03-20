export const sampleAuthor = {
  id: "https://openalex.org/A99999999999",
  display_name: "Jon Doe",
  display_name_alternatives: ["JD"],
  orcid: "https://orcid.org/0000-0000-0000-0000",
  works_count: 101,
  cited_by_count: 4133,
  ids: {
    openalex: "https://openalex.org/A99999999999",
    orcid: "https://oricd.org/0000-0000-0000-0000",
    mag: 1111111111111,
  },
  last_known_institution: {
    id: "https://openalex.org/I999999999",
    ror: "https://ror.og/0000000",
    display_name: "Institution of Jon Doe",
    country_code: "US",
    type: "education",
  },
  counts_by_year: [
    {
      year: 2022,
      works_count: 1,
      cited_by_count: 32,
    },
    {
      year: 2021,
      works_count: 3,
      cited_by_count: 102,
    },
  ],
  x_concepts: [
    {
      level: 0,
      id: "https://openalex.org/C71924100",
      wikidata: "https://www.wikidata.org/wiki/Q11190",
      score: 83.3,
      display_name: "Medicine",
    },
  ],
  works_api_url: "https://api.openalex.org/works?filter=author.id:A99999999999",
  updated_date: "2022-03-09",
  created_date: "2014-09-21",
};

export const sampleConcept = {
  id: "https://openalex.org/C71924100",
  display_name: "Medicine",
  wikidata: "https://www.wikidata.org/wiki/Q11190",
  level: 0,
  description: "field of study for diagnosing, treating and preventing disease",
  works_count: 38700520,
  cited_by_count: 428237996,
  ids: {
    openalex: "https://openalex.org/C71924100",
    wikidata: "https://www.wikidata.org/wiki/Q11190",
    wikipedia: "https://en.wikipedia.org/wiki/Medicine",
    umls_cui: ["C0013227"],
    mag: 71924100,
  },
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Asklepios.3.jpg",
  image_thumbnail_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Asklepios.3.jpg/66px-Asklepios.3.jpg",
  international: {},
  ancestors: [],
  related_concepts: [
    {
      score: 104.962,
      id: "https://openalex.org/C141071460",
      level: 1,
      display_name: "Surgery",
      wikidata: null,
    },
  ],
  counts_by_year: [
    {
      year: "2022",
      works_count: 278091,
      cited_by_count: 4345161,
    },
    {
      year: "2021",
      works_count: 1819490,
      cited_by_count: 37021333,
    },
  ],
  works_api_url: "https://api.openalex.org/works?filter=concepts.id:C71924100",
  updated_date: "2022-03-09",
  created_date: "2016-06-24",
};

export const sampleInstitution = {
  id: "https://openalex.org/I999999999",
  display_name: "Institution of Jon Doe",
  ror: "https://ror.og/0000000",
  relevance_score: 11.190523,
  country_code: "US",
  type: "education",
  homepage_url: "http://sampleinstitution.sample",
  image_url: "",
  image_thumbnail_url: "",
  display_name_acronyms: ["SAMPLE"],
  display_name_alternatives: [],
  works_count: 706280,
  cited_by_count: 5076453,
  ids: {
    openalex: "https://openalex.org/I999999999",
    ror: "https://ror.og/0000000",
    grid: "grid.999999.z",
    wikipedia: "",
    wikidata: "",
    mag: 999999999,
  },
  geo: {
    city: "Beijing",
    geonames_city_id: "1816670",
    region: "Beijing",
    country_code: "CN",
    country: "China",
    latitude: 39.9081,
    longitude: 116.251,
  },
  international: {},
  associated_institutions: [],
  counts_by_year: [
    {
      year: 2022,
      works_count: 11494,
      cited_by_count: 1487195,
    },
  ],
  x_concepts: [
    {
      level: 0,
      id: "https://openalex.org/C71924100",
      wikidata: "https://www.wikidata.org/wiki/Q11190",
      score: 83.3,
      display_name: "Medicine",
    },
  ],
  works_api_url:
    "https://api.openalex.org/works?filter=institutions.id:I999999999",
  updated_date: "2022-03-09",
  created_date: "2016-06-24",
};

export const sampleVenue = {
  id: "https://openalex.org/V99999999",
  display_name: "Sample Research Institution",
  publisher: "",
  issn_l: "",
  issn: [""],
  works_count: 5343,
  cited_by_count: 34234,
  is_oa: false,
  is_in_doaj: false,
  homepage_url: "http://samepleinst.sample",
  ids: {
    openalex: "https://openalex.org/V99999999",
    mag: 2142342,
  },
  counts_by_year: [
    {
      year: 2022,
      works_count: 42,
      cited_by_count: 421,
    },
  ],
  x_concepts: [
    {
      level: 0,
      score: 71.8,
      display_name: "Medicine",
      id: "https://openalex.org/C71924100",
      wikidata: "https://www.wikidata.org/wiki/Q11190",
    },
  ],
  works_api_url:
    "https://api.openalex.org/works?filter=host_venue.id:V99999999",
  updated_date: "2022-03-09",
  created_date: "2017-09-15",
};

export const sampleWork = {
  id: "https://openalex.org/W9999999",
  display_name: "Jon Doe's Sample Research",
  title: "Jon Doe's Sample Research",
  publication_date: "2001-09-01",
  host_venue: {
    id: "https://openalex.org/V99999999",
    display_name: "Sample Research Institution",
    publisher: "",
    issn_l: "",
    issn: [""],
    url: "",
    is_oa: false,
    version: "publishedVersion",
    license: "",
  },
  authorships: [
    {
      id: "https://openalex.org/A99999999999",
      display_name: "Jon Doe",
      orcid: "https://orcid.org/0000-0000-0000-0000",
      institutions: [],
      author_position: "first",
      raw_affiliation_string: "",
    },
  ],
  concepts: [
    {
      level: 0,
      score: 71.8,
      display_name: "Medicine",
      id: "https://openalex.org/C71924100",
      wikidata: "https://www.wikidata.org/wiki/Q11190",
    },
  ],
  alternate_host_venues: [],
  open_access: {
    is_oa: false,
    oa_status: "hybrid",
    oa_url: "",
  },
  cited_by_count: 0,
  ids: {
    doi: "",
    mag: 4234,
    openalex: "",
    pmid: "",
  },
  publication_year: 2001,
  cited_by_api_url: "https://api.openalex.org/works?filter=cites:W9999999",
  doi: "",
  type: "journal-article",
  is_paratext: false,
  is_retracted: false,
  referenced_works: [],
  related_works: [],
  biblio: {},
  abstract_inverted_index: {},
};
