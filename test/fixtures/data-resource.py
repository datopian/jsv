dataset_metadata = {
    "profile": "data-resource",  # The profile of this descriptor.
    # [example] "profile": "tabular-data-package"
    # [example] "profile": "http://example.com/my-profiles-json-schema.json"
    "name": "my-nice-name",  # An identifier string. Lower case characters with `.`, `_`, `-` and `/` are allowed.
    "path": ["file.csv","file2.csv"],  # A reference to the data for this resource, as either a path as a string, or an array of paths as strings. of valid URIs.
    # [example] "path": ["http://example.com/file.csv","http://example.com/file2.csv"]
    # [example] "path": "http://example.com/file.csv"
    "data": None,  # Inline data for this resource.
    "schema": None,  # A schema for this resource.
    "title": "My Package Title",  # A human-readable title.
    "description": "# My Package description\nAll about my package.",  # A text description. Markdown is encouraged.
    "homepage": "http://example.com/",  # The home on the web that is related to this data package.
    "sources": [{"title":"World Bank and OECD","path":"http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"}],  # The raw sources for this resource.
    "licenses": [{"name":"odc-pddl-1.0","path":"http://opendatacommons.org/licenses/pddl/","title":"Open Data Commons Public Domain Dedication and License v1.0"}],  # The license(s) under which the resource is published.
    "format": "xls",  # The file format of this resource.
    "mediatype": "text/csv",  # The media type of this resource. Can be any valid media type listed with [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml).
    "encoding": "utf-8",  # The file encoding of this resource.
    # [example] "encoding": "utf-8"
    "bytes": 2082,  # The size of this resource in bytes.
    "hash": "d25c9c77f588f5dc32059d2da1136c02",  # The MD5 hash of this resource. Indicate other hashing algorithms with the {algorithm}:{hash} format.
    # [example] "hash": "SHA256:5262f12512590031bbcc9a430452bfd75c2791ad6771320bb4b5728bfb78c4d0"
}
