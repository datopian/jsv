![Build](https://github.com/datopian/jsv/workflows/Build/badge.svg)

# JSON Schema Viewer

JSON Schema viewer is a lightweight library and tool in JavaScript to turn a [JSON Schema](https://json-schema.org/) into nice human-readable documents that you publish or embed in HTML or MarkDown.

It is designed for use in rendering documentation for metadata and data schemas for data management systems like [CKAN](https://github.com/ckan/ckan) — though it can be used for any JSON Schema.

## Install

Requires [NodeJS](https://nodejs.org/en/) 12+:

```console
$ npm install
```

If you want to have `jsv` available _globally_ in your path, you can use `npm link` and use it from the terminal:

```console
$ jsv '{"title": "Data Resource", "description": "Data Resource.", "type": "object"}'
# Data Resource

**(`object`)**

Data Resource.
```

## CLI

```console
$ jsv --help
Usage: jsv [options] [<json>]

jsv (JSON Scheme Viewer)

JSON Schema viewer is a lightweight javascript library and tool that turns JSON
schemas into elegant human-readable documents.

It expects a JSON or CKAN Schema from stdin (defaults to JSON Schema) and
outputs to stdout its version for visualization in MarkDown (unless another
format is passed using --output). Alternatively, a custom Jinja2/Nunjucks
template can be passed using --template.

Options:
  -V, --version              output the version number
  -i, --input <format>       Format of the input: json for JSON Schema, ckan
                             for CKAN Schema (default: "json")
  -o, --output <format>      Format of the output: html, json, md, py (default:
                             "md")
  -t, --template <template>  Template to use for rendering (overrides --output)
  -h, --help                 display help for command
```

### Examples

#### Piping with a local file

```console
$ cat test/fixtures/data-resource.json | jsv
# Data Resource

**(`object`)**

Data Resource.

## Profile

**(`string`)** Defaults to _data-resource_.

The profile of this descriptor.
…
```

#### Piping from a remote file

```console
$ curl https://specs.frictionlessdata.io/schemas/data-resource.json | jsv
# Data Resource

**(`object`)**

Data Resource.

## Profile

**(`string`)** Defaults to _data-resource_.

The profile of this descriptor.
…
```

#### Exporting to HTML

```console
$ curl https://specs.frictionlessdata.io/schemas/data-resource.json | jsv --output html
<h1 id="dataresource">Data Resource</h1>
<p><strong>(<code>object</code>)</strong></p>
<p>Data Resource.</p>
<h2 id="profile">Profile</h2>
<p><strong>(<code>string</code>)</strong> Defaults to <em>data-resource</em>.</p>
<p>The profile of this descriptor.</p>
…
```

#### Exporting to Python

```console
$ curl https://specs.frictionlessdata.io/schemas/data-resource.json | jsv --output py
dataset_metadata = {
    "profile": "data-resource",  # The profile of this descriptor.
    # [example] "profile": "tabular-data-package"
    # [example] "profile": "http://example.com/my-profiles-json-schema.json"
    "name": "my-nice-name",  # An identifier string. Lower case characters with `.`, `_`, `-` and `/` are allowed.
    "path": ["file.csv","file2.csv"],  # A reference to the data for this resource, as either a path as a string, or an array of paths as strings. of valid URIs.
…
```

#### Reading from a CKAN Schema input

```console
$ cat test/fixtures/ckan-schema.json | jsv --input ckan
# BMGF&#39;s special metadatas

**(`object`)**

## Title

**(`string`)**

…
```

#### Converting from CKAN Schema to JSON Schema

```console
$ cat test/fixtures/ckan-schema.json | jsv --input ckan --output json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "BMGF's special metadatas",
  "type": "object",
  "properties": {
    "title": {
      "title": "Title",
      "type": "string",
      "propertyOrder": 1,
…
```

#### Using a custom template

For example, having this `custom.md` template:

```markdown
**{{ title }}** `{{ type }}`
```

One can have:

```console
$ jsv --template custom.md '{"title": "Data Resource", "type": "object"}'
**Data Resource** `object`
```

Check the [custom templates section](#custom-templates) for more details.

## API

The `engine` async function expects the JSON Schema and a format, both as _string_. It returns the converted contents also as _string_.

### Examples

To convert a given JSON schema from a file, we need to read the content of the input file pass it to the `engine`:

```javascript
import fs from "fs";
import { engine } from "jsv";

fs.promises
  .readFile("schema.json", "utf8")
  .then((data) =>
    engine(data, { input: "json", output: "md" }).then(console.log)
  );
```

Also you can use a [custom template](#custom-templates):

```javascript
engine(data, { template: "path/to/custom/template.r" });
```

And convert from CKAN to JSON Schema on the fly:

```javascript
engine(data, { input: "ckan", output: "json" }).then(console.log);
```

## Custom templates

`jsv` accepts custom templates processed by [Nunjucks](https://mozilla.github.io/nunjucks/) (a JavaScript port of [Jinja](https://jinja.palletsprojects.com/)). In additional to its natives filters, `jsv` added a couple of extra ones for better dealing with JSON Schema:

### `cleanExample`

The `examples` in JSON Schemas are a list of strings containing the key of that instance and an example of its possible value. This filter extracts just the value.

For example, given `obj = { "example": 42 }`, `{{ obj|cleanExample }}` prints `42`.

### `getDefault`

This filter takes a JSON Schema _instance_ and try to gets its default value for visualization purposes:

- If a default is given in the schema, this is the output

- If there's no default, it tries to return the value of the first example

- Otherwise, it returns `null`

For example, given:

```javascript
a = { default: 42 };
b = { examples: ['{ "answer": 42 }', '{ "answer": 21 }'] };
c = {};
```

Then `{{ a|getDefault }}, {{ b|getDefault }}, {{ c|getDefault }}` prints `42, 42, null`

### `getDescription`

This filter takes a JSON Schema _instance_ and try to gets its description for visualization purposes:

- If a description is given in the schema, this is the output

- If there's no description, it tries to return the title instead

- Otherwise, it returns `null`

For example, given:

```javascript
a = { description: "42" };
b = { name: "42" };
c = {};
```

Then `{{ a|getDefault }}, {{ b|getDefault }}, {{ c|getDefault }}` prints `"42", "42", null`

### `parseJson`

A shorcut to JavaScript's native `JSON.parse`. Useful to parse strings that contains JSON data, as in the examples of JSON Schema, for instance.

### `stringify`

A shorcut to JavaScript's native `JSON.stringify`. Useful to parse JavaScript objects as strings in a template..

## Tests

```console
$ npm test
```
