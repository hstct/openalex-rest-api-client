export const mockAuthor = {
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
      id: "https://openalex.org/C86803240",
      wikidata: "https://www.wikidata.org/wiki/Q420",
      score: 83.3,
      display_name: "Biology",
    },
  ],
  works_api_url: "https://api.openalex.org/works?filter=author.id:A99999999999",
  updated_date: "2022-03-09",
  created_date: "2014-09-21",
};
