# JSON Schema Viewer

JSON Schema viewer is a lightweight library and tool in JavaScript to turn a [JSON Schema](https://json-schema.org/) into a nice human readable document that you publish or embed in HTML or MarkDown.

It is designed for use in rendering documentation for metadata and data schemas for data management systems like [CKAN](https://github.com/ckan/ckan) — though it can be used for any JSON Schema.

## Install

Requires [NodeJS](https://nodejs.org/en/) 12+:

```console
$ npm install
```

If you want to have `jsv` available _globally_ in your path, you can use `npm link`.

## Usage

### CLI

```console
$ jsv --help
Usage: jsv [options] [<json>]

jsv (JSON Scheme Viewer)

JSON Schema viewer is a lightweight javascript library and tool that turns JSON
schemas into a elegant human readable documents.

It expects a JSON Schema from stdin and outputs to stdout its version for
visualization in MarkDown, unless another format is passed using --output.

Options:
  -V, --version          output the version number
  -p, --output <format>  Format of the output: md (default: "md")
  -h, --help             display help for command
```

#### Examples

##### Passing the JSON Schema directly

```console
$ jsv '{"$schema": "http://json-schema.org/draft-04/schema#", "title": "Data Resource", "description": "Data Resource.", "type": "object"}'
# Data Resource

**(`object`)**

Data Resource.
```

##### Piping with a local file

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

##### Piping from a remote file

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

### API

The `engine` async function expects the JSON Schema and a format, both as _string_. It returns the converted contents also as _string_.

#### Example

To convert a given JSON schema from a file, we need to read the content of the input file pass it to the `engine`:

```javascript
import fs from "fs";
import { engine } from "jsv";

fs.promises
  .readFile("schema.json", "utf8")
  .then((data) => engine(data, "md").then(console.log));
```

## Tests

```console
$ npm test
```
