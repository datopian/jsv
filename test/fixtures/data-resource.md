# Data Resource

**(`object`)**

Data Resource.

## Profile

**(`string`)** Defaults to _data-resource_.

The profile of this descriptor.

Every Package and Resource descriptor has a profile. The default profile, if none is declared, is `data-package` for Package and `data-resource` for Resource.

### Examples

- `{"profile":"tabular-data-package"}`

- `{"profile":"http://example.com/my-profiles-json-schema.json"}`

## Name

**(`string`)**

An identifier string. Lower case characters with `.`, `_`, `-` and `/` are allowed.

This is ideally a url-usable and human-readable name. Name `SHOULD` be invariant, meaning it `SHOULD NOT` change when its parent descriptor is updated.

### Example

- `{"name":"my-nice-name"}`

## Path

A reference to the data for this resource, as either a path as a string, or an array of paths as strings. of valid URIs.

The dereferenced value of each referenced data source in `path` `MUST` be commensurate with a native, dereferenced representation of the data the resource describes. For example, in a *Tabular* Data Resource, this means that the dereferenced value of `path` `MUST` be an array.

### Validation

#### It must satisfy one of these conditions

##### Path

**(`string`)**

A fully qualified URL, or a POSIX file path..

Implementations need to negotiate the type of path provided, and dereference the data accordingly.

###### Examples

- `{"path":"file.csv"}`

- `{"path":"http://example.com/file.csv"}`

**(`array`)**

###### Examples

- `["file.csv"]`

- `["http://example.com/file.csv"]`

### Examples

- `{"path":["file.csv","file2.csv"]}`

- `{"path":["http://example.com/file.csv","http://example.com/file2.csv"]}`

- `{"path":"http://example.com/file.csv"}`

## Data

Inline data for this resource.

## Schema

**(`object`)**

A schema for this resource.

## Title

**(`string`)**

A human-readable title.

### Example

- `{"title":"My Package Title"}`

## Description

**(`string`)**

A text description. Markdown is encouraged.

### Example

- `{"description":"# My Package description\nAll about my package."}`

## Home Page

**(`string`)**

The home on the web that is related to this data package.

### Example

- `{"homepage":"http://example.com/"}`

## Sources

**(`array`)**

The raw sources for this resource.

### Example

- `{"sources":[{"title":"World Bank and OECD","path":"http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"}]}`

## Licenses

**(`array`)**

The license(s) under which the resource is published.

This property is not legally binding and does not guarantee that the package is licensed under the terms defined herein.

### Example

- `{"licenses":[{"name":"odc-pddl-1.0","path":"http://opendatacommons.org/licenses/pddl/","title":"Open Data Commons Public Domain Dedication and License v1.0"}]}`

## Format

**(`string`)**

The file format of this resource.

`csv`, `xls`, `json` are examples of common formats.

### Example

- `{"format":"xls"}`

## Media Type

**(`string`)**

The media type of this resource. Can be any valid media type listed with [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml).

### Example

- `{"mediatype":"text/csv"}`

## Encoding

**(`string`)** Defaults to _utf-8_.

The file encoding of this resource.

### Example

- `{"encoding":"utf-8"}`

## Bytes

**(`integer`)**

The size of this resource in bytes.

### Example

- `{"bytes":2082}`

## Hash

**(`string`)**

The MD5 hash of this resource. Indicate other hashing algorithms with the {algorithm}:{hash} format.

### Examples

- `{"hash":"d25c9c77f588f5dc32059d2da1136c02"}`

- `{"hash":"SHA256:5262f12512590031bbcc9a430452bfd75c2791ad6771320bb4b5728bfb78c4d0"}`
