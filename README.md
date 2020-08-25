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

It expects a JSON Schema from stdin and outputs to stdout its version for
visualization in MarkDown, unless another format is passed using --output.
Alternatively, a custom Jinja2/Nunjucks template can be passed using --format
(if --format is used, --output is ignored).

Options:
  -V, --version              output the version number
  -o, --output <format>      Format of the output: html, md (default: "md")
  -t, --template <template>  Template to use for rendering
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

#### Exporting in HTML

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

## API

The `engine` async function expects the JSON Schema and a format, both as _string_. It returns the converted contents also as _string_.

### Example

To convert a given JSON schema from a file, we need to read the content of the input file pass it to the `engine`:

```javascript
import fs from "fs";
import { engine } from "jsv";

fs.promises
  .readFile("schema.json", "utf8")
  .then((data) => engine(data, { output: "md" }).then(console.log));
```

## Tests

```console
$ npm test
```
