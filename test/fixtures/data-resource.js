const datasetMetadata = {
  // The profile of this descriptor.
  profile: "data-resource",
  // [example] profile: "tabular-data-package"
  // [example] profile: "http://example.com/my-profiles-json-schema.json"
  // An identifier string. Lower case characters with `.`, `_`, `-` and `/` are allowed.
  name: "my-nice-name",
  // A reference to the data for this resource, as either a path as a string, or an array of paths as strings. of valid URIs.
  path: ["file.csv", "file2.csv"],
  // [example] path: ["http://example.com/file.csv","http://example.com/file2.csv"]
  // [example] path: "http://example.com/file.csv"
  // Inline data for this resource.
  data: null,
  // A schema for this resource.
  schema: null,
  // A human-readable title.
  title: "My Package Title",
  // A text description. Markdown is encouraged.
  description: "# My Package description\nAll about my package.",
  // The home on the web that is related to this data package.
  homepage: "http://example.com/",
  // The raw sources for this resource.
  sources: [
    {
      title: "World Bank and OECD",
      path: "http://data.worldbank.org/indicator/NY.GDP.MKTP.CD",
    },
  ],
  // The license(s) under which the resource is published.
  licenses: [
    {
      name: "odc-pddl-1.0",
      path: "http://opendatacommons.org/licenses/pddl/",
      title: "Open Data Commons Public Domain Dedication and License v1.0",
    },
  ],
  // The file format of this resource.
  format: "xls",
  // The media type of this resource. Can be any valid media type listed with [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml).
  mediatype: "text/csv",
  // The file encoding of this resource.
  encoding: "utf-8",
  // [example] encoding: "utf-8"
  // The size of this resource in bytes.
  bytes: 2082,
  // The MD5 hash of this resource. Indicate other hashing algorithms with the {algorithm}:{hash} format.
  hash: "d25c9c77f588f5dc32059d2da1136c02",
  // [example] hash: "SHA256:5262f12512590031bbcc9a430452bfd75c2791ad6771320bb4b5728bfb78c4d0"
};
